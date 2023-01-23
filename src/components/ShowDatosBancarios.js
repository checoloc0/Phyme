import { StyleSheet,ScrollView,  TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';


const ShowDatosBancarios = ({item}) => {
  return (
   
     
  <View style={styles.container}>
  <Card>
          <Card.Title style={styles.header}>Consulta tus Datos de Pago</Card.Title>
         
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Ordinal: {item.Ordinal}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Titular Cuenta: {item.Titular}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Banco: {item.Banco}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Número Cuenta: {item.Num_cuenta}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Clabe: {item.Clabe}</Text>                    
          </View>
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Código Swift: {item.SWIFT}</Text>                    
          </View>
          



 </Card>
  </View>
   
  )
}

export default ShowDatosBancarios

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