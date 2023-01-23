import { StyleSheet, Text, View ,Image,Button,Pressable,TouchableHighlight} from 'react-native'
import React from 'react'
import { COLORSGLOBAL } from "../constants/ColorsGlobal"
import { FlatGrid,SectionGrid } from 'react-native-super-grid';
const StartScreen = ({navigation}) => {



  const [items, setItems] = React.useState([
    { name: 'Mis Datos Personales', code: '#1abc9c',navigation:"MisDatosPersonales" },
    { name: 'Mis Dependientes', code: '#2ecc71',navigation:"MisDependientes" } ,
    { name: 'Mis Recibos Pago', code: '#3498db',navigation:"DatosPagosScreen" },
    { name: 'Datos Bancarios', code: '#9b59b6',navigation:"DatosBancariosScreen" },
    { name: 'Reloj Checador', code: '#34495e',navigation:"RelojChecadorScreen" },
  /*  { name: 'Solicita Vacaciones', code: '#16a085',navigation:"SolVacScreen" },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },*/
  ]);

  return (
    
    <View style={styles.containerGral}>
      <View   style={styles.containerImage} >
      <Image 
        source={require("../images/perfil.jpg")}
        style={styles.imagecontainer}/>
      <Text style={styles.Titulo}>Bienvenido a PhYME</Text>
      </View>



    <SectionGrid
      itemDimension={120}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Mi información Personal',
          data: items.slice(0, 2),
        },
        {
          title: 'Mis Datos Económicos',
          data: items.slice(2, 4 ),
        },
        {
          title: 'Mi Puesto de Trabajo',
          data: items.slice(4, 5),
        },
      ]}
      style={styles.gridView}

      
      renderItem={
        
        
        ({ item, section, index }) => (


       
         <View style={[styles.itemContainer, { backgroundColor: item.code }]}>

       
        <Pressable  onPress={ ()=> navigation.navigate(item.navigation) }>
          <Text style={styles.itemName}>{item.name}</Text>
          </Pressable>

              </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
</View>
        

  )
}

export default StartScreen

const styles = StyleSheet.create({
  containerGral:{
    flex:1,
    
  
  },
  containerImage:{
    flex:1,
    alignItems:"center", 
    flexDirection:"column",
    flexWrap:"nowrap",
    marginTop:0,
    justifyContent:"center",
    
    

},
  container:{
      flex:1,
      alignItems:"center",      
      marginTop:0    
  },
  imagecontainer:{
   width:150,
   height:150,
   borderRadius: 150/2,
   alignItems:"center",
   justifyContent:"center"

},
buttoncontainer:{    
  flexDirection:'row',       
        width:'100%',
        justifyContent:'space-between'
  

},
buttonStyle:{
  backgroundColor: "" ,
      height:35,
      width:'40%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      color: "#f0ffff"
},

gridView: {
  marginTop: 0,
  flex: 1,
  padding:0
},
itemContainer: {
  justifyContent: 'center',
  borderRadius: 5,
  padding: 10,
  height: 150,
},
itemName: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',
},
itemCode: {
  fontWeight: '600',
  fontSize: 12,
  color: '#fff',
},
sectionHeader: {
  flex: 1,
  fontSize: 15,
  fontWeight: '600',
  alignItems: 'center',
  backgroundColor: '#636e72',
  color: 'white',
  padding: 10,
},
parrafo:{
   marginTop:0
},
Titulo:{
  fontSize:40,
  justifyContent:"center"

}



})