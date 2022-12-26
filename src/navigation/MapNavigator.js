import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";


import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import  COLORS  from "../constants/Colors";


import StartScreen from '../screens/StartScreen'
import MisDatosPersonales from '../screens/MisDatosPersonales'
import MisDatosLaborales from '../screens/MisDatosLaborales'



const Stack= createNativeStackNavigator();

export default MapNavigator= ()=>{
    return(
       
            <Stack.Navigator initialRouteName="Direcciones"
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
            }}  >   


              <Stack.Screen
          name="Direcciones"
          component={PlaceListScreen}
          options={({ navigation }) => ({
            title: "Phyme Address",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons
                  name="md-add"
                  color={
                    Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA
                  }
                  size={23}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Detalle"
          component={PlaceDetailScreen}
          options={{ title: "Detalle direccion" }}
        />
        <Stack.Screen
          name="Nuevo"
          component={NewPlaceScreen}
          options={{ title: "Nueva direccion" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Mapa" }}
        />
                
            </Stack.Navigator>
       

    )
}
