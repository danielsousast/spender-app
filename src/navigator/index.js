import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Report from '../screens/Report';
import NewEntry from '../screens/NewEntry';
import Colors from '../styles/Colors';
import AddButton from '../components/AddButton';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const icons = {
  home: {
    lib: Icon,
    name: 'home',
  },
  entry: {
    lib: Icon,
    name: 'creditcard',
  },
  report: {
    lib: Icon,
    name: 'barschart',
  },
};

export default function HomeTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({color, size, focused}) => {
            if (route.name === 'entry') {
              return (
                <AddButton
                  onPress={() => navigation.navigate('entry')}
                  focused={focused}
                />
              );
            }
            const {lib: Icon, name} = icons[route.name];
            return <Icon name={name} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: Colors.white,
            borderTopColor: 'rgba(255,255,255,0.2)',
          },
          activeTintColor: Colors.turquese,
          inactiveTintColor: '#92929c',
        }}>
        <Tab.Screen name="home" component={HomeStack} />
        <Tab.Screen name="entry" component={NewEntry} />
        <Tab.Screen name="report" component={Report} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
