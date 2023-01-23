import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 

import ShopNavigator from './ShopNavigator';
import MapNavigator from './MapNavigator';
import MiCuenta from '../screens/MiCuenta';
import Contactanos from '../screens/Contactanos';

//adiciones
import React from 'react';
import { Platform, TouchableOpacity,StyleSheet,View,Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import  COLORS  from "../constants/Colors";


const ButtonTabs = createBottomTabNavigator();

export default ButtonTabNavigation =() => {
  return (
   
         <ButtonTabs.Navigator   initialRouteName="Inicio"
         screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.WHITE : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : COLORS.WHITE,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
         >
             <ButtonTabs.Screen name="Inicio" component={ShopNavigator} 
              options={{
                tabBarIcon: ({ focus }) => (
                  <View style={styles.item}>
                    <Ionicons name="home" size={20} color="black" />
                    
                  </View>
                ),
              }}
             
             />
        
          {/*  <ButtonTabs.Screen name="Mi cuenta" component={MiCuenta} 
            
            options={{
              tabBarIcon: ({ focus }) => (
                <View style={styles.item}>
                  <Ionicons name="people-circle-outline" size={20} color="black" />
                  
                </View>
              ),
            }}
            />

          */   }
             <ButtonTabs.Screen name="Contactanos" component={Contactanos} 
                        options={{
                          tabBarIcon: ({ focus }) => (
                            <View style={styles.item}>
                              <Ionicons name="call-outline" size={20} color="black" />
                              
                            </View>
                          ),
                        }}
             
             /> 

           

             <ButtonTabs.Screen name="Marcajes" component={MapNavigator} 
              options={{
                tabBarIcon: ({ focus }) => (
                  <View style={styles.item}>
                    <Ionicons name="map-outline" size={20} color="black" />
                    
                  </View>
                ),
              }}
             
             /> 
          </ButtonTabs.Navigator>

     
 
   
  );
}


const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});