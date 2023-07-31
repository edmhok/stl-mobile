import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/opening/login';
import Register from '../screen/opening/register';
import Dashboard from '../screen/dashboard/dashboard';
import Bet from '../screen/bet/bet';
import Expenses from '../screen/expenses/expenses';
import BetLogs from '../screen/betlogs/betlogs';
import Lotto from '../screen/lotto/lotto';
import Dsr from '../screen/dsr/dsr';
import Soa from '../screen/soa/soa';

const Stack = createStackNavigator();
const StackNavigators = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
          animationEnabled: false,
        }}>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Register}
          name="Register"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Bet}
          name="Bet"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Expenses}
          name="Expenses"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={BetLogs}
          name="BetLogs"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Lotto}
          name="Lotto"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dsr}
          name="Dsr"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Soa}
          name="Soa"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
