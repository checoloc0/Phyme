
import React from 'react'
import { StyleSheet,ScrollView,  TouchableOpacity, View,Image } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';

const SolVacScreen = () => {
  return (
    <View style={styles.container}>
    <Card>
            <Card.Title style={styles.header}>Solicita tus Vacaciones</Card.Title>
           
          <Card.Divider />
          <View  style={styles.user}>
          <Text style={styles.name}>Fecha Inicio: </Text>  
          </View>

   </Card>
  </View>

  )
}

export default SolVacScreen


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