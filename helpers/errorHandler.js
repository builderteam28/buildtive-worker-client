import { Alert } from 'react-native';

const errorHandler = (error) => {
  console.log(error)
  const message = error?.response?.data?.message;
  if (message) {
    console.log(message);
    Alert.alert('Error', message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
  } else {
    console.log(error.message);
    Alert.alert('Error', error.message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
  }
};

export default errorHandler;
