import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MisDatosLaborales = () => {
  return (
    <View style={styles.container}>
      <Text>Mis Datos Laborales</Text>

      <Text>Es esta sección puedes consultar tu datos laborales como </Text>
      <Text>Recibos de Pago</Text>
      <Text>Contratos</Text>
      <Text>Vacaciones</Text>
      <Text>Otra información</Text>

    </View>
  )
}

export default MisDatosLaborales

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})