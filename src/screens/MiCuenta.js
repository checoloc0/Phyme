import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiCuenta = () => {
  return (
    <View>
      
      <View style={styles.container}>
      <Text>Mi cuenta</Text> 
      <Text>En esta sección podrias realizar cambios a tu cuenta</Text> 
    </View>


    </View>
  )
}

export default MiCuenta

const styles = StyleSheet.create({
  
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",     
  },
  
  })