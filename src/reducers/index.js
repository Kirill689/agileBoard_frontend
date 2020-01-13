import {combineReducers} from 'redux';
import errorsReducer from './errorsReducer';
import tasksReducer from './tasksReducer';

//This is the rootReducer that imported to a store
export default combineReducers({
    
    //Code here to combine all rducers together
    errors: errorsReducer,
    tasks: tasksReducer

})