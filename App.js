
import {  Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import ButtonTabNavigation from './src/navigation/ButtonTabNavigation';
import MainNavigator from './src/navigation'
import { Provider } from 'react-redux';
import store from './src/store';

import { init } from "./src/db";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });


export default function App() {
  const [fontsLoaded]= useFonts({
    PermanentMaker: require("./src/assets/fonts/PermanentMarker-Regular.ttf")
  })

  if(!fontsLoaded){
    return null
  }
 
  return (
  <Provider store={store}>
  <MainNavigator/>
  </Provider>
  );
}


