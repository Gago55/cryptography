import { createStore, combineReducers } from "redux";
import appReducer from "./appReducer";

let reducers = combineReducers({
    app : appReducer
})

let store = createStore(reducers)

export default store