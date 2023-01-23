import {DATOS_RELOJ_CHECADOR} from '../../data/datosRelojchecador'
import { SELECTED_EMP } from '../actions/datosRelojchecador.actions';



const initialState ={
    relojchecador:DATOS_RELOJ_CHECADOR,         
    selected:null
}

const datosRelojchecadorReducer = (state= initialState, action ) => {
    switch (action.type) {
        case SELECTED_EMP:
            const IndexEmp = state.empleados.findIndex(
                (emp)=> emp.Id_Empleado=== action.empID
            );
            if (IndexEmp===-1) return state
            return {...state,selected: state.empleados[IndexEmp]}
      default:
                return state;
}
}



export default datosRelojchecadorReducer;