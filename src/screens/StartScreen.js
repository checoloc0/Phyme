import { StyleSheet, Text, View ,Image,Button,Pressable} from 'react-native'
import React from 'react'

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image 
        source={require("../images/phyme.png")}
        style={styles.imagecontainer}/>

      <Text>Bienvenidos a Phyme</Text>

      <Text>Este es un Software de Nómina y Recursos Humanos</Text>
      <Text>Consulta tu información</Text>
      <View style={styles.buttoncontainer}>
      <Pressable style={styles.buttonStyle}  onPress={()=> navigation.navigate("MisDatosPersonales")}>
        <Text>Mis Datos Personales</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={()=> navigation.navigate("MisDatosLaborales")}>
        <Text>Mis Datos Laborales</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",     
  },
  imagecontainer:{
    height:50,
    width:100,
    marginTop:50,
    marginBottom:15

},
buttoncontainer:{    
  flexDirection:'row',       
        width:'100%',
        justifyContent:'space-between'
  

},
buttonStyle:{
  backgroundColor: "#6495ed" ,
      height:35,
      width:'40%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      color: "#f0ffff"
}



})