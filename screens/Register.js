import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DatePicker } from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import { theme } from '../helpers/theme';

export const Register = () => {
  const navigation = useNavigation();
  const [registerForm, setRegisterForm] = useState({
    email: '',
    username: '',
    password: '',
    phoneNumber: '',
    dob: '',
    numberId: '',
    category: '',
  });
  const [categories] = useState([
    {
      id: 1,
      label: 'Home Build',
      value: 'Home Build',
    },
    {
      id: 2,
      label: 'Electricity',
      value: 'Electricity',
    },
    {
      id: 3,
      label: 'Toilet',
      value: 'Toilet',
    },
    {
      id: 4,
      label: 'Repair',
      value: 'Repair',
    },
    {
      id: 5,
      label: 'Painting',
      value: 'Painting',
    },
    {
      id: 6,
      label: 'Plumbing',
      value: 'Plumbing',
    },
  ]);
  const onChangeSelect = (selectedObject) => {
    // console.log(selectedObject);
    setRegisterForm({
      ...registerForm,
      category: selectedObject,
    });
  };
  const onChangeDob = (date) => {
    // console.log(date)
    setRegisterForm({
      ...registerForm,
      dob: date,
    });
  };
  const handleChange = (name, value) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };
  const handleSubmit = () => {
    console.log(registerForm);
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={{ marginHorizontal: 30, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 20, marginBottom: 30 }}>
          <Text style={styles.title}>Create User Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => handleChange('email', text)} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput secureTextEntry style={styles.textInput} onChangeText={(text) => handleChange('password', text)} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Full Name</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => handleChange('username', text)} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Phone Number</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => handleChange('phoneNumber', text)} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Date of Birth</Text>
          <DatePicker dateValue={registerForm.dob} onChangeDate={onChangeDob} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>ID Number</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => handleChange('numberId', text)} />
        </View>
        <View style={styles.inputContainer}>
          <Dropdown data={categories} title={'Your job category'} onChange={onChangeSelect} value={registerForm.category} />
        </View>
        <View style={[styles.inputContainer, { paddingBottom: 10 }]}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const buttonBase = { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, borderRadius: 25 };
const styles = StyleSheet.create({
  inputContainer: { marginBottom: 10 },
  title: { fontFamily: theme.font.regular, fontSize: 25 },
  text: { fontFamily: theme.font.regular, fontSize: 15 },
  textInput: { fontSize: 15, borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 5 },
  inputContainer: {
    marginVertical: 10,
  },
  button: {
    ...buttonBase,
    backgroundColor: theme.colors.primary,
  },
});
