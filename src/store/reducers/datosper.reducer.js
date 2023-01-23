
import {DATOS_DIRECCION_EMP, DATOS_PERSONALES_EMP,DATOS_DEPENDIENTES_EMP,DATOS_BANCARIOS_EMP} from '../../data/datospersonales'
import { SELECTED_EMP, SELECTED_EMP_DIR,SELECTED_EMP_DEP,SELECTED_DATOS_BANCARIOS } from '../actions/datosper.action';


const initialState ={
        empleados:DATOS_PERSONALES_EMP,
        direccion:DATOS_DIRECCION_EMP,
        dependientes:DATOS_DEPENDIENTES_EMP,  
        datosbancarios:DATOS_BANCARIOS_EMP,
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
        case SELECTED_EMP_DIR:
            const IndexEmpDIRE = state.direccion.findIndex(
            (emp)=> emp.Id_Empleado=== action.empID
             );
            if (IndexEmp===-1) return state
            return {...state,selected: state.direccion[IndexEmpDIRE]}
        case SELECTED_EMP_DEP:
                const IndexEmpDEP = state.dependientes.findIndex(
                (emp)=> emp.Id_Empleado=== action.empID
                 );
                if (IndexEmp===-1) return state
                return {...state,selected: state.dependientes[IndexEmpDEP]}

        case SELECTED_DATOS_BANCARIOS:
             const IndexEmpDATBANC = state.datosbancarios.findIndex(
              (emp)=> emp.Id_Empleado=== action.empID
               );
              if (IndexEmp===-1) return state
               return {...state,selected: state.datosbancarios[IndexEmpDATBANC]}
    
        default:
            return state;
    }    



}
export default DatosPerReducer;
