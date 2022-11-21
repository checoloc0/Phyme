import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from '../screens/StartScreen'
import MisDatosPersonales from '../screens/MisDatosPersonales'
import MisDatosLaborales from '../screens/MisDatosLaborales'



const Stack= createNativeStackNavigator();

export default ShopNavigator= ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>   
                <Stack.Screen name="Startscreen" component={StartScreen} />
                  <Stack.Screen name="MisDatosPersonales" component={MisDatosPersonales} />
                  <Stack.Screen name="MisDatosLaborales" component={MisDatosLaborales} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}