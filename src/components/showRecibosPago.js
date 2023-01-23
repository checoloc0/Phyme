import { StyleSheet,ScrollView,  TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';


const ShowRecibosPago = ({item}) => {
  return (
   

  <View style={styles.container}>
  <Card>
          <Card.Title style={styles.header}>Valida tus Recibos de Pago</Card.Title>
         
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Ordinal: {item.Ordinal}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Fecha de Pago: {item.Fecha_Paga}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Sueldo: {item.Sueldo}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Total Percepciones {item.T_Percep}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Total Deducciones: {item.T_Deducciones}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>ISR: {item.T_ISR}</Text>                    
          </View>
          



 </Card>
  </View>
   
  )
}

export default ShowRecibosPago

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