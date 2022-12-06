import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopNavigator from './ShopNavigator';
import MiCuenta from '../screens/MiCuenta';
import Contactanos from '../screens/Contactanos';

const ButtonTabs = createBottomTabNavigator();

export default ButtonTabNavigation =() => {
  return (
    <NavigationContainer>
         <ButtonTabs.Navigator>
            <ButtonTabs.Screen name="Inicio" component={ShopNavigator} />
            <ButtonTabs.Screen name="Mi cuenta" component={MiCuenta} />
             <ButtonTabs.Screen name="Contactanos" component={Contactanos} />      
          </ButtonTabs.Navigator>
    </NavigationContainer>
  );
}