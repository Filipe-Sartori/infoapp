
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Produtos from './Produtos';
import Empresa from './Empresa';
import Menu from './Menu';
import Perfil from './Perfil';


const Tab = createBottomTabNavigator();

export default function  Principal() {
  return (
    
    <Tab.Navigator
      initialRouteName="Empresa"
      screenOptions={{
        tabBarActiveTintColor: '#00FFFF',
      }}
    >

      <Tab.Screen
        name="Empresa"
        component={Empresa}
        options={{
          tabBarLabel: 'Empresa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

    {/*  <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />*/}

      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />

<Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-edit-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
