import {createStore, combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";

//importacion de Reducers
import DatosPerReducer from "./reducers/datosper.reducer"
import PlacesReducer from "./reducers/places.reducer"

const RootReducer = combineReducers(
    {
        DatosPer:DatosPerReducer,
        places: PlacesReducer,
       
    }
)

export default createStore(RootReducer,applyMiddleware(thunk))

