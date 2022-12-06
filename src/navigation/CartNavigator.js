import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




const Stack= createNativeStackNavigator();

export default CartNavigator= ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>   
                
            </Stack.Navigator>
        </NavigationContainer>

    )
}