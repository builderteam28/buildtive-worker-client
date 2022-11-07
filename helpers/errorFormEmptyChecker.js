import { Alert } from 'react-native';

export const errorFormEmptyChecker = (form, error = []) => {
  for (const key in form) {
    if (!form[key]) {
      const keyForm = key[0].toUpperCase() + key.substring(1);
      error.push(`${keyForm} is required`);
    }
  }

  if (error.length > 0) {
    let err = error[0].toString()
    errorAlert(err);
  }

  return error;
};

export const errorAlert = (err) => {
  Alert.alert('Error Invalid Input', err);
};

export default errorFormEmptyChecker;
