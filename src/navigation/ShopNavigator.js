import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from '../screens/StartScreen'
import MisDatosPersonales from '../screens/MisDatosPersonales'
import MisDependientes from "../screens/MisDependientes";
import RelojChecadorScreen from "../screens/RelojChecadorScreen";
import MisDatosLaborales from '../screens/MisDatosLaborales'
import DatosBancariosScreen from "../screens/DatosBancariosScreen";
import SolVacScreen from "../screens/SolVacScreen";
import DatosPagosScreen from "../screens/DatosPagosScreen";

const Stack= createNativeStackNavigator();

export default ShopNavigator= ()=>{
    return(
       
            <Stack.Navigator  screenOptions={{
                headerShown: false
              }}>   

                <Stack.Screen name="Startscreen"               
                 component={StartScreen} />
                  <Stack.Screen name="MisDatosPersonales" component={MisDatosPersonales} />
                  <Stack.Screen name="MisDependientes" component={MisDependientes} />
                  <Stack.Screen name="RelojChecadorScreen" component={RelojChecadorScreen} />
                  <Stack.Screen name="DatosBancariosScreen" component={DatosBancariosScreen} />
                  <Stack.Screen name="SolVacScreen" component={SolVacScreen} />
                  <Stack.Screen name="DatosPagosScreen" component={DatosPagosScreen} />
            </Stack.Navigator>
       

    )
}


