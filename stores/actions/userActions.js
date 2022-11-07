import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import errorHandler from '../../helpers/errorHandler';
import globalBaseURL from '../../helpers/globalBaseUrl';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

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
    console.log(token);
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
        return data;
      });
    } catch (error) {
      errorHandler(error);
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
        categoryId: category.id,
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
