import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React from 'react'
import {useSelector,useDispatch,connect} from "react-redux"
import { selectedEmp } from '../store/actions/datosRelojchecador.actions';
import ShowRelojChecador from  '../components/ShowRelojChecador'



const RelojChecadorScreen = () => {

  const marcajes = useSelector((state) => state.RelojChecador.relojchecador );

  
  const dispatch = useDispatch(); // se declara solo el hook

 const handleSelectedEmp = (item) => {
    dispatch(selectedEmp(item.Id_Empleado));
    // navigation.navigate("Bread",{       
    // name:item.title,    });
}
  const renderGridItem = ( {item}  )=>(   
    <ShowRelojChecador item={item} onSelected={handleSelectedEmp} />   
  );

  return ( 
   
    <View> 
        
    <FlatList 
    data={marcajes}
    keyExtractor= {(item) => item.Ordinal}
    renderItem={renderGridItem} />
    
    {  /* <View>
    <FlatList 
    data={direcciones}
    keyExtractor= {(item) => item.Id_Empleado}
    renderItem={renderGridItemDIRECCIONES} />
    
  </View>*/}
  </View>
  )
}

export default  connect()(RelojChecadorScreen)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})