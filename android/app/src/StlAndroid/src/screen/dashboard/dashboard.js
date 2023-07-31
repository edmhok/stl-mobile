import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DashboardStyle as style} from './dashboard.Style';

export default function Dashboard({navigation}) {
  return (
    <View style={style.dashboardContainer}>

      <View style={style.content}>
        <View style={style.dashboardBtns}>
          <TouchableOpacity
            style={style.buttonOpacity}
            onPress={() => navigation.navigate('Bet')}>
            <Text style={style.buttonText}>Bet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonOpacity}
            onPress={() => navigation.navigate('Expenses')}>
            <Text style={style.buttonText}>Expenses</Text>
          </TouchableOpacity>
        </View>

        <View style={style.dashboardBtns}>
          <TouchableOpacity
            style={style.buttonOpacity}
            onPress={() => navigation.navigate('BetLogs')}>
            <Text style={style.buttonText}>Bet Logs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonOpacity}
            onPress={() => navigation.navigate('Lotto')}>
            <Text style={style.buttonText}>Lotto Result</Text>
          </TouchableOpacity>
        </View>

        <View style={style.dashboardBtns}>
          <TouchableOpacity
            style={style.buttonOpacity}
            onPress={() => navigation.navigate('Dsr')}>
            <Text style={style.buttonText}>Daily Sales Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonOpacity}
            onPress={() => navigation.navigate('Soa')}>
            <Text style={style.buttonText}>Statement of Accounts</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            style={style.logoutBtn}
            onPress={() => navigation.navigate('Logout')}>
            <Text style={style.buttonText}>Log Out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
