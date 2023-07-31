import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import {LoginStyle as style} from './login.Style';
import axios from 'axios';

export default function Login({navigation}) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:8000/auth/login', {
        auth: {
          email,
          password 
        }
      });
      console.log(response.data);
      if (response.ok) {
        const jsonData = await response.json();
        const token = jsonData.access_token;
        // Store the token in localStorage
        localStorage.setItem('token', token);
        setIsLoading(false);
        
        window.location.href = '/branch';
      } else {
        // Handle login error
        setErrorMessage('Login Failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={style.loginContainer}>
      <View style={style.content}>
        <View style={style.comLogo}>
        </View>
        <Text style={style.signinText}>Sign In</Text>
        <Text style={style.accountText}>User Account</Text>

        <View style={style.form}>
          <Text style={style.inputlabel}>Username</Text>
          <TextInput
            mode="outlined"
            style={style.signinInput}
            placeholder="Email Address"
            placeholderTextColor="#777777"
            value={email}
            secureTextEntry={false}
            onChangeText={setEmail}
          />
        </View>
        <View style={style.form}>
          <Text style={style.inputlabel}>Password</Text>
          <TextInput
            mode="outlined"
            style={style.signinInput}
            right={<TextInput.Icon icon="eye" />}
            placeholder="password"
            placeholderTextColor="#777777"
            value={password}
            secureTextEntry={false}
            onChangeText={setPassword}
          />
           <View style={style.forgotBtn}>
              <TouchableOpacity
                style={style.textBtbOpacity}
                // onPress={checkToken}
              >
                <Text style={style.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={style.SignIn}>
          <TouchableOpacity
            style={style.signinBtnOpacity}
            disabled={isLoading}
            onPress={handleLogin}>
            <Text style={style.btnText}> {isLoading ? 'Loading...' : 'Sign-In'}</Text>
          </TouchableOpacity>
          {errorMessage && <p>{errorMessage}</p>}
        </View>
       
        <View style={style.loginBtns}>
          <TouchableOpacity
            style={style.signinBtnOpacity}
            onPress={() => navigation.navigate('Register')}>
            <Text style={style.btnText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={style.loginBtns}>
          <TouchableOpacity
            style={style.signinBtnOpacity}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={style.btnText}>Dashboard</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
