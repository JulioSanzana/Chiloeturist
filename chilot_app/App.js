import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MythListScreen from './screens/MythListScreen';
import MythDetailScreen from './screens/MythDetailScreen';
import PlaceListScreen from './screens/PlaceListScreen';
import PlaceDetailScreen from './screens/PlaceDetailScreen';
import ToponymListScreen from './screens/ToponymListScreen';
import ToponymDetailScreen from './screens/ToponymDetailScreen';

const MythStack = createStackNavigator();
const PlaceStack = createStackNavigator();
const ToponymStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MythStackScreen() {
  return (
    <MythStack.Navigator>
      <MythStack.Screen name="Mitos" component={MythListScreen} />
      <MythStack.Screen name="DetalleMito" component={MythDetailScreen} options={({ route }) => ({ title: route.params.name })} />
    </MythStack.Navigator>
  );
}

function PlaceStackScreen() {
  return (
    <PlaceStack.Navigator>
      <PlaceStack.Screen name="Lugares" component={PlaceListScreen} />
      <PlaceStack.Screen name="DetalleLugar" component={PlaceDetailScreen} options={({ route }) => ({ title: route.params.name })} />
    </PlaceStack.Navigator>
  );
}

function ToponymStackScreen() {
  return (
    <ToponymStack.Navigator>
      <ToponymStack.Screen name="Toponimia" component={ToponymListScreen} />
      <ToponymStack.Screen name="DetalleToponimo" component={ToponymDetailScreen} options={({ route }) => ({ title: route.params.name })} />
    </ToponymStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mitos" component={MythStackScreen} />
        <Tab.Screen name="Lugares" component={PlaceStackScreen} />
        <Tab.Screen name="Topónimos" component={ToponymStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
