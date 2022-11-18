import {SET_ERROR} from '../types'

const intialState = '';

export default (state = initialState, action) =>{
    switch(action.type){
        case SET_ERROR:
            return action.payload;
        default:
            return state;
    }
};