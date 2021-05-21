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
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: 'white',
      gestureEnabled: true,
    }}
  >
    <Stack.Screen name='Tabs@' component={Tabs} />
    <Stack.Screen
      name='Detail'
      component={Detail}
      screenOptions={{ headerStyle: 'blue' }}
    />
  </Stack.Navigator>
);
