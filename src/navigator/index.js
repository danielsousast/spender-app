import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import NewEntry from '../screens/NewEntry';
import Entries from '../screens/Entries';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="newentry" component={NewEntry} />
        <Stack.Screen name="entries" component={Entries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
