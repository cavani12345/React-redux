import {DISHES} from '../shared/dishes'
import {LEADERS} from '../shared/leaders';
 
export const initialState={
    dishes:DISHES,
    leaders:LEADERS,
    isModelOpen:false
};

export const Reducer = (state= initialState,action)=>{
    return state;
}