import {combineReducers} from 'redux';
import errorsReducer from './errorsReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
    
    //Code here to combine all rducers together
    errors: errorsReducer,
    tasks: tasksReducer

})