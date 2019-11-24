import { createStore, combineReducers } from "redux";
import appReducer from "./appReducer";

let reducers = combineReducers({
    app : appReducer
})

let store = createStore(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store