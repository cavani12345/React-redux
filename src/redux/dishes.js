import * as ActionTypes from '../redux/Actions/ActionTypes';
import {DISHES} from '../shared/dishes';


export const Dishes = (state = {
       isDishLoading: true,
       errmess: null,
       dishes: []
         }, action) => {
        switch(action.type){

            case ActionTypes.ADD_DISHES:
            return {...state, isDishLoading:false, errmess:null, dishes:action.payload};

            case ActionTypes.DISH_LOADING:
                return {...state,isDishLoading:true, errmess:null, dishes:[]};

            case ActionTypes.DISH_FAILED:
                return{...state, isDishLoading:false, errmess:action.payload, dishes:[]};
       
                default:
                    return state;
            }
        

}