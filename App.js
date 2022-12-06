
import {  Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import ButtonTabNavigation from './src/navigation/ButtonTabNavigation';


export default function App() {
  const [fontsLoaded]= useFonts({
    PermanentMaker: require("./src/assets/fonts/PermanentMarker-Regular.ttf")
  })

  if(!fontsLoaded){
    return null
  }
 
  return (<ButtonTabNavigation/>);
}


