import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';


import Home from '../pages/home';
import Basico from '../pages/basico/rotas';
import Items from '../pages/Items/rotas';
import Vale from '../pages/vale/rotas';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      /> 
      <Tab.Screen
        name="Básico"
        component={Basico}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={24} color="black" />
          ),
        }}
      />       
      <Tab.Screen
        name="Items"
        component={Items}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="toolbox" size={24} color="black" />
          ),
        }}
      /> 
      <Tab.Screen
        name="O Vale"
        component={Vale}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="archway" size={24} color="black" />
          ),
        }}
      />      
    </Tab.Navigator>
  );
}
