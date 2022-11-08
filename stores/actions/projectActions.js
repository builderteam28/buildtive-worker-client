import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import errorHandler from '../../helpers/errorHandler';
import globalBaseURL from '../../helpers/globalBaseUrl';
import { PROJECTWORKERS_FETCH_ALL, PROJECT_FETCH_ALL_INACTIVE } from './actionTypes';

export const getAllInactiveProjects = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const { data } = await axios(globalBaseURL + `/workers/projects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token,
        },
      });

      dispatch({ type: PROJECT_FETCH_ALL_INACTIVE, payload: data });
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const getAllJobsProjectWorker = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const { data } = await axios(globalBaseURL + `/workers/appliedProject`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token,
        },
      });

      dispatch({ type: PROJECTWORKERS_FETCH_ALL, payload: data });
    } catch (error) {
      errorHandler(error);
    }
  };
};
