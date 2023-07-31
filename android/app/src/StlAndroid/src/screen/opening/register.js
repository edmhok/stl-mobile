import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {registerStyles} from './register.Style';
import axios from 'axios';

export default function Register({useNavigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    lastName: '',
    middleName: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:8000/auth/register', {
        auth: {
          username,
          password,
          first_name,
          middle_name,
          last_name,
          position,
          daily_rental,
          status
        }
      });
      console.log(response.data);

      if (response.ok) {
        const jsonData = await response.json();
        const token = jsonData.access_token;
        // Store the token in localStorage
        localStorage.setItem('token', token);
        setIsLoading(false);
        
        window.location.href = '/dashboard';
      } else {
        // Handle login error
        setErrorMessage('Login Failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
   
  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.content}>
        <View style={registerStyles.comLogo}>
        </View>
        <Text style={registerStyles.pleaseText}>Please sign in to Continue</Text>
        <View style={registerStyles.form}>
          <View style={registerStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={registerStyles.inputR}
              placeholder="Username"
              placeholderTextColor="#777777"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              mode="outlined"
              style={registerStyles.inputR}
              placeholder="Password"
              placeholderTextColor="#777777"
              value={password}
              keyboardType=""
              onChangeText={setPassword}
            />
          </View>
          <View style={registerStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={registerStyles.inputR}
              placeholder="First Name"
              placeholderTextColor="#777777"
              value={firstName}
              onChangeText={setFirstname}
            />
            <TextInput
              mode="outlined"
              style={registerStyles.inputR}
              placeholder="Last name"
              placeholderTextColor="#777777"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={registerStyles.registerRow}>
            <TextInput
              mode="outlined"
              style={registerStyles.inputR}
              placeholder="Daily Rental"
              placeholderTextColor="#777777"
              value={daily_rental}
              onChangeText={set}
            />
            <TextInput
              mode="outlined"
              style={registerStyles.inputR}
              placeholder="Contact Number"
              placeholderTextColor="#777777"
              value={address}
              keyboardType="numeric"
              onChangeText={setAddress}
            />
          </View>
        </View>
        <View>
          <Text>Terms and Conditions</Text>
        </View>
        <View style={registerStyles.SignUp}>
          <TouchableOpacity
            style={registerStyles.SignUpOpacity}
            // onPress={() => navigation.navigate('Set up your Store')}
            onPress={handleRegister}>
            <Text style={registerStyles.SignUpTextBtn}>SING IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
