import {combineReducers} from 'redux';
import errorsReducer from './errorsReducer';

export default combineReducers({
    //Code here to combine all rducers together
    errors: errorsReducer

})