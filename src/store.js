import {combineReducers, createStore} from "redux"
import todoReducers from "./components/reducer/todoReducers"

const reducers = combineReducers({todo:todoReducers});

const store =createStore(reducers);
export default store;