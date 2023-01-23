import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORSGLOBAL } from "../constants/ColorsGlobal";

import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: COLORSGLOBAL.primary },
        headerTintColor: "#2888e8",
        headerTitleStyle: {
          fontWeight: "bold",          
        },
        headerVisible: false,
          headerShown: false
      }}
    >
      <Stack.Screen name="Phyme" component={AuthScreen} 
      
      />
    </Stack.Navigator>
  );
};
