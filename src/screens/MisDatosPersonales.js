import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import {useSelector,useDispatch,connect} from "react-redux"
import { selectedEmp } from '../store/actions/datosper.action';
import ShowDatosPersonales from  '../components/ShowDatosPersonales'
import { DATOS_PERSONALES_EMP  } from '../data/datospersonales';

const MisDatosPersonales = () => {

  const empleados = useSelector((state) => state.DatosPer.empleados );
  const dispatch = useDispatch(); // se declara solo el hook

 const handleSelectedEmp = (item) => {
    dispatch(selectedEmp(item.Id_Empleado));
    // navigation.navigate("Bread",{       
    // name:item.title,    });
}
  const renderGridItem = ( {item}  )=>(
    <ShowDatosPersonales item={item} onSelected={handleSelectedEmp} />
  );

 


  return ( 
   
    <FlatList 
    data={empleados}
    keyExtractor= {(item) => item.Id_Empleado}
    renderItem={renderGridItem} />

  )
}

export default  connect()(MisDatosPersonales)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",     
},

})