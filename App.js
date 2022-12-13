
import {  Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import ButtonTabNavigation from './src/navigation/ButtonTabNavigation';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded]= useFonts({
    PermanentMaker: require("./src/assets/fonts/PermanentMarker-Regular.ttf")
  })

  if(!fontsLoaded){
    return null
  }
 
  return (
  <Provider store={store}>
  <ButtonTabNavigation/>
  </Provider>
  );
}


