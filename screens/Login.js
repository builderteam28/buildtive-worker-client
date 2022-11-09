import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import IconBuildHub from '../components/IconBuildHub';
import errorHandler from '../helpers/errorHandler';
import { theme } from '../helpers/theme';
import { loginSubmit } from '../stores/actions/userActions';

export const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loginSubmit(loginForm))
      .then((data) => {
        if (data) {
          navigation.replace('HomeTab');
        }
      })
      .catch((err) => {
        errorHandler(err);
      });
  };

  return (
    <View style={{ marginHorizontal: 30, flex: 1 }}>
      <View style={{ marginBottom: 50, justifyContent: 'center' }}>
        <View style={{ marginBottom: 50, alignItems: 'center' }}>
          <IconBuildHub />
          <Text style={styles.text}>Log in to</Text>
          <Text style={styles.text}>
            Your <Text style={styles.title}>BuildHub</Text>
          </Text>
          <Text style={styles.text}>Account</Text>
        </View>
        <TextInput
          style={[styles.text, styles.textInput, { marginBottom: 10 }]}
          placeholder="Email"
          onChangeText={(text) => handleChange('email', text)}
        />
        <TextInput
          secureTextEntry
          style={[styles.text, styles.textInput]}
          placeholder="Password"
          onChangeText={(text) => handleChange('password', text)}
        />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity style={[styles.button, { marginBottom: 10 }]} onPress={handleSubmit}>
          <Text>Log in</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonOutline} onPress={changePage}>
          <Text>Log in with Google</Text>
        </TouchableOpacity> */}
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#1B50B7' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const buttonBase = { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, borderRadius: 25 };
const styles = StyleSheet.create({
  textInput: { fontSize: 15, borderBottomWidth: 1, borderBottomColor: 'black', backgroundColor: 'transparent' },
  text: { fontFamily: theme.font.regular, fontSize: 25 },
  title: { color: theme.colors.primary, fontFamily: theme.font.bold },
  button: {
    ...buttonBase,
    backgroundColor: theme.colors.primary,
  },
  buttonOutline: {
    ...buttonBase,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
});
