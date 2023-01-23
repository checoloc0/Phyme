import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React from 'react'
import {useSelector,useDispatch,connect} from "react-redux"
import { selectedEmp } from '../store/actions/datoslaborales.actions';
import ShowRecibosPago from  '../components/showRecibosPago'



const DatosPagosScreen = () => {

  const recibos = useSelector((state) => state.DatosLaborales.datospago );

  
  const dispatch = useDispatch(); // se declara solo el hook

 const handleSelectedEmp = (item) => {
    dispatch(selectedEmp(item.Id_Empleado));
    // navigation.navigate("Bread",{       
    // name:item.title,    });
}
  const renderGridItem = ( {item}  )=>(   
    <ShowRecibosPago item={item} onSelected={handleSelectedEmp} />   
  );

  return ( 
   
    <View> 
        
    <FlatList 
    data={recibos}
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

export default  connect()(DatosPagosScreen)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})