import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './src/HomeScreen';
import AboutScreen from './src/AboutScreen';
import SearchScreen from './src/SearchScreen';
import DetailScreen from './src/DetailScreen';
import ProfileScreen from './src/ProfileScreen';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#e15f41',
        }
      }} />
      <HomeStack.Screen name="Detail" component={DetailScreen} options={{ headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#e15f41',
        }
      }} />
    </HomeStack.Navigator>
  );
}

const AboutStack = createNativeStackNavigator();
function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} options={{ headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#e15f41',
        }
      }} />
      <AboutStack.Screen name="Profile" component={ProfileScreen} options={{ headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#e15f41',
        }
      }} />
    </AboutStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-snow' : 'ios-snow-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#e15f41',
          tabBarInactiveTintColor: '#000',
          // headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerTintColor: '#fff',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e15f41',
          }
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#e15f41',
          }
        }} />
        <Tab.Screen name="About" component={AboutStackScreen} options={{ headerTintColor: '#fff',
        headerShown: false,
          headerStyle: {
            backgroundColor: '#e15f41',
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
