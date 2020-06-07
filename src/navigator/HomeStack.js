import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditEntry from '../screens/EditEntry';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="editentry" component={EditEntry} />
    </Stack.Navigator>
  );
}
