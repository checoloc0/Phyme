import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React from 'react'
import {useSelector,useDispatch,connect} from "react-redux"
import { selectedEmp } from '../store/actions/datosper.action';
import ShowDatosBancarios from  '../components/ShowDatosBancarios'




const DatosBancariosScreen = () => {

  const datosbancarios = useSelector((state) => state.DatosPer.datosbancarios );

  
  const dispatch = useDispatch(); // se declara solo el hook

 const handleSelectedEmp = (item) => {
    dispatch(selectedEmp(item.Id_Empleado));
    // navigation.navigate("Bread",{       
    // name:item.title,    });
}
  const renderGridItem = ( {item}  )=>(   
    <ShowDatosBancarios item={item} onSelected={handleSelectedEmp} />   
  );

  return ( 
   
    <View> 
        
    <FlatList 
    data={datosbancarios}
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

export default  connect()(DatosBancariosScreen)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})