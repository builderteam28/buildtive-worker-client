import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import errorHandler from '../../helpers/errorHandler';
import globalBaseURL from '../../helpers/globalBaseUrl';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Location from 'expo-location';
import { Platform } from 'react-native';
import { PROFILE_FETCH, SET_ACCESS_TOKEN, SET_LOCATION, SET_USERNAME } from './actionTypes';

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export const loginSubmit = (payload) => {
  return async (dispatch, getState) => {
    try {
      return registerForPushNotificationsAsync().then(async (token) => {
        const { data } = await axios(globalBaseURL + `/workers/login`, {
          method: 'POST',
          data: {
            email: payload.email,
            password: payload.password,
            DeviceId: token,
          },
        });

        await AsyncStorage.setItem('access_token', data.access_token);
        await AsyncStorage.setItem('fullName', data.fullName);

        dispatch({ type: SET_ACCESS_TOKEN, payload: data.access_token });
        dispatch({ type: SET_USERNAME, payload: data.fullName });

        return data;
      });
    } catch (error) {
      errorHandler(error);
      return error
    }
  };
};

export const registerSubmit = (payload) => {
  return async (dispatch, getState) => {
    const { email, password, fullName, phoneNumber, address, dateOfBirth, numberId, category } = payload;
    console.log(payload);
    return axios({
      method: 'POST',
      url: globalBaseURL + '/workers/register',
      data: {
        email,
        password,
        fullName,
        phoneNumber,
        address,
        birthDate: dateOfBirth,
        idNumber: numberId,
        CategoryId: category.id,
      },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        errorHandler(err);
      });
  };
};

export const getUser = (payload) => {
  return async (dispatch, getState) => {
    const access_token = await AsyncStorage.getItem('access_token');
    return axios({
      method: 'GET',
      url: globalBaseURL + '/workers',
      headers: { access_token },
    })
      .then(({ data }) => {
        let avgRating = data.Ratings?.reduce((previousValue, currentValue) => {
          const val = parseInt(previousValue) + parseInt(currentValue.ratings);
          return val;
        }, 0);
        if (avgRating) {
          avgRating = avgRating / data.Ratings.length;
        }
        data.avgRating = avgRating;
        if (Array.isArray(data?.Ratings)) {
          data.totalRating = data?.Ratings.length;
        }
        dispatch({
          type: PROFILE_FETCH,
          payload: data,
        });
        return data;
      })
      .catch((err) => {
        errorHandler(err);
        return err;
      });
  };
};

export const getLocation = () => {
  return async (dispatch, getState) => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw { message: 'Failed to get location' };
      }
      let location = await Location.getCurrentPositionAsync({});
      let regionName = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      dispatch({
        type: SET_LOCATION,
        payload: JSON.stringify(regionName[0]['city']).replace(/"/g, ''),
      });
    } catch (error) {
      console.log(error, ' <<getLocation');
      errorHandler(error);
    }
  };
};
