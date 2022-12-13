
import {DATOS_PERSONALES_EMP} from '../../data/datospersonales'
import { SELECTED_EMP } from '../actions/datosper.action';


const initialState ={
        empleados:DATOS_PERSONALES_EMP,
        selected:null
}

const DatosPerReducer = (state= initialState, action ) => {
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
export default DatosPerReducer;
