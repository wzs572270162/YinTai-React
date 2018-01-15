import {createStore} from "redux";
import {reducer,reducer2} from "../Reducer";
import {combineReducers} from "redux"
import {applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';

const myreducer = combineReducers({
	AlllistReducer:reducer,
	XuanxiangReducer:reducer2
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store =createStore(myreducer,

	composeEnhancers(applyMiddleware(thunk)));

export default store