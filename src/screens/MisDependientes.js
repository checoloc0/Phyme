import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React from 'react'
import {useSelector,useDispatch,connect} from "react-redux"
import { selectedEmp } from '../store/actions/datosper.action';
import ShowDependientes from  '../components/ShowDependientes'


import { DATOS_PERSONALES_EMP  } from '../data/datospersonales';

const MisDependientes = () => {

  const dependientes = useSelector((state) => state.DatosPer.dependientes );

  
  const dispatch = useDispatch(); // se declara solo el hook

 const handleSelectedEmp = (item) => {
    dispatch(selectedEmp(item.Id_Empleado));
    // navigation.navigate("Bread",{       
    // name:item.title,    });
}
  const renderGridItem = ( {item}  )=>(   
    <ShowDependientes item={item} onSelected={handleSelectedEmp} />   
  );

  return ( 
   
    <View> 
        
    <FlatList 
    data={dependientes}
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

export default  connect()(MisDependientes)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})