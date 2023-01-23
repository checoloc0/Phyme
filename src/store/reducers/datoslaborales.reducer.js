import {DATOS_PAGO_EMP} from '../../data/datoslaborales'
import { SELECTED_EMP } from '../actions/datoslaborales.actions';



const initialState ={
    datospago:DATOS_PAGO_EMP,         
    selected:null
}

const datosLaboralesReducer = (state= initialState, action ) => {
    switch (action.type) {
        case SELECTED_EMP:
            const IndexEmp = state.datospago.findIndex(
                (emp)=> emp.Id_Empleado=== action.empID
            );
            if (IndexEmp===-1) return state
            return {...state,selected: state.datospago[IndexEmp]}
      default:
                return state;
}
}



export default datosLaboralesReducer;