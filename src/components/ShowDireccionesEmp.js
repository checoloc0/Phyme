import { StyleSheet,ScrollView,  TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';


const ShowDireccionesEmp = ({item}) => {
  return (
   
  <View style={styles.container}>
  <Card>
          <Card.Title style={styles.header}>Dirección del Empleado</Card.Title>
         
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Calle: {item.Calle}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Número: {item.Numero}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Colonia: {item.Colonia}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Alcaldia: {item.Alcaldia}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Ciudad: {item.Cd}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>País: {item.Pais}</Text>                    
          </View>
          



 </Card>
  </View>
   
  )
}

export default ShowDireccionesEmp

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  header:{
    fontSize:18,
    flex: 1,
  fontSize: 15,
  fontWeight: '600',
  alignItems: 'center',
  backgroundColor: '#636e72',
  color: 'white',
  padding: 10,


  }
  });