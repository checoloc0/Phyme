import { StyleSheet,ScrollView,  TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';


const ShowDependientes = ({item}) => {
  return (
   
    
  <View style={styles.container}>
  <Card>
          <Card.Title style={styles.header}>Dependientes del Empleado</Card.Title>
         
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Ordinal: {item.Ordinal}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Nombre: {item.Nombre}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Apellido Paterno: {item.AP}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Apellido Materno: {item.AP}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Dependencia: {item.Dependencia}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Fecha de Nacimiento: {item.FecNac}</Text>                    
          </View>
          



 </Card>
  </View>
   
  )
}

export default ShowDependientes

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