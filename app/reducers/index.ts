
import { combineReducers } from 'redux'
import defaultReducer from './default';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    defaultReducer,
    routing: routerReducer
});



export default rootReducer;