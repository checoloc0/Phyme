import {createStore, combineReducers} from "redux"

import DatosPerReducer from "./reducers/datosper.reducer"


const RootReducer = combineReducers(
    {
        DatosPer:DatosPerReducer,
       
    }
)

export default createStore(RootReducer)

