import {createStore, combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";

//importacion de Reducers
import DatosPerReducer from "./reducers/datosper.reducer"
import PlacesReducer from "./reducers/places.reducer"
import AuthReducer from "./reducers/auth.reducer";
import datosRelojchecadorReducer from "./reducers/datosRelojchecador.reducer";
import datosLaboralesReducer from "./reducers/datoslaborales.reducer";
const RootReducer = combineReducers(
    {
        DatosPer:DatosPerReducer,
        places: PlacesReducer,
        auth: AuthReducer,
        RelojChecador:datosRelojchecadorReducer,
        DatosLaborales:datosLaboralesReducer
    }
)

export default createStore(RootReducer,applyMiddleware(thunk))

