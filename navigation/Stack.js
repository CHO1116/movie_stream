import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../Screens/Detail';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
        shadowColor: 'black',
      },
      headerTitleStyle: { fontSize: 30, textAlign: 'center', color: 'green' },
      gestureEnabled: false,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name='Tabs@' component={Tabs} />
    <Stack.Screen
      name='Detail'
      component={Detail}
      screenOptions={{ headerStyle: 'black' }}
    />
  </Stack.Navigator>
);
