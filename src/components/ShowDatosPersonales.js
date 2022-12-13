import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const ShowDatosPersonales = ({item}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>Empleado</Text>
      </View>

      <View styles={styles.detail}>
        <View>
        <Text>Id Emmpleado: {item.Id_Empleado}</Text>
        <Text>Nombre: {item.Nombre}</Text>
        <Text>ApellidoP: {item.ApellidoP}</Text>
        <Text>ApellidoM: {item.ApellidoM}</Text>
        <Text>Fecha de Nacimiento: {item.Fecha_Nac}</Text>
        <Text>País de Nacimiento: {item.Pais_Nac}</Text>
        <Text>RFC: {item.RFC}</Text>
        <Text>Foto: {item.Foto}</Text>
        
        
        </View>
        
      </View>


    </View>
  )
}

export default ShowDatosPersonales

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:7,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
    },
    header:{
        fontSize:18,
        fontFamily:"PermanentMaker"
    },
    detail:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-between"

    }

})