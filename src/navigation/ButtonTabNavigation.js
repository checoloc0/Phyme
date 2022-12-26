import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 

import ShopNavigator from './ShopNavigator';
import MapNavigator from './MapNavigator';

import MiCuenta from '../screens/MiCuenta';
import Contactanos from '../screens/Contactanos';

//adiciones
import React from 'react';
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import  COLORS  from "../constants/Colors";


const ButtonTabs = createBottomTabNavigator();

export default ButtonTabNavigation =() => {
  return (
    <NavigationContainer>
         <ButtonTabs.Navigator   initialRouteName="Inicio"
         screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.DARK_SIENNA : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
         >
             <ButtonTabs.Screen name="Inicio" component={ShopNavigator} />
            <ButtonTabs.Screen name="Mi cuenta" component={MiCuenta} />
             <ButtonTabs.Screen name="Contactanos" component={Contactanos} /> 
             <ButtonTabs.Screen name="Direcciones" component={MapNavigator} /> 
          </ButtonTabs.Navigator>

     
 
    </NavigationContainer>
  );
}