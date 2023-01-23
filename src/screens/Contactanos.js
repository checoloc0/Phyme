import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet,Image,Text, View} from 'react-native';

const supportedURL = 'https://phyme.cloud/';

const unsupportedURL = 'slack://open?team=123456';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.Titulo}>Soporte PhYME</Text>

 <Image 
      source={require("../images/soporte.jpg")}
      style={styles.imagecontainer}/>

      <OpenURLButton url={supportedURL}>Lenvanta un Ticket</OpenURLButton>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage:{
    flex:1,
    alignItems:"center", 
    flexDirection:"column",
    flexWrap:"nowrap",
    marginTop:0,
    justifyContent:"center",
},
Titulo:{
  fontSize:40,
  justifyContent:"center"

}
});

export default App;