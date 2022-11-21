import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MisDatosPersonales = () => {
  return (
    <View style={styles.container}>
      <Text>Mis Datos Personales</Text>

      <Text>Es esta sección puedes consultar tu datos personales como </Text>
      <Text>Nombre</Text>
      <Text>Dirección</Text>
      <Text>Correo Electrónico</Text>
      <Text>Datos de Pago</Text>
    </View>
  )
}

export default MisDatosPersonales

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})