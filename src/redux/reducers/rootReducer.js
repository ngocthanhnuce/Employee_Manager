import { combineReducers } from 'redux';
import getDataReducer from '.';

const rootReducer = combineReducers({
    getDataReducer: getDataReducer
});

export default rootReducer;