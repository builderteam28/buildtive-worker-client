import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import errorHandler from '../../helpers/errorHandler';
import globalBaseURL from '../../helpers/globalBaseUrl';
import { PROJECTWORKERS_FETCH_ALL, PROJECT_FETCH_ALL_INACTIVE } from './actionTypes';

export const getAllInactiveProjects = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const { data: apiData } = await axios(globalBaseURL + `/workers/projects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token,
        },
      });

      const data = apiData.map((el) => {
        const acceptedWorker = el.ProjectWorkers.filter((e) => e.status === 'Accepted').length;

        return {
          ...el,
          acceptedWorker,
        };
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
      const { data: apiData } = await axios(globalBaseURL + `/workers/appliedProject`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token,
        },
      });

      const data = apiData.map((el) => {
        const acceptedWorker = el.Project.ProjectWorkers.filter((e) => e.status === 'Accepted').length;

        return {
          ...el,
          acceptedWorker,
        };
      });

      dispatch({ type: PROJECTWORKERS_FETCH_ALL, payload: data });
    } catch (error) {
      errorHandler(error);
    }
  };
};
