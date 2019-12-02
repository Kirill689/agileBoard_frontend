import {GET_ERRORS} from '../actions/types';

const innitialState = {error: "HEllo error"};

export default function (state=innitialState, action) {
    switch(action.type){

        case GET_ERRORS:
            return action.payload;

        default:
            return state;
    }
}