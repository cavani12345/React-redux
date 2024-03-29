import * as ActionTypes from '../redux/Actions/ActionTypes';
export const Leaders = (state = {
    isLoading: true,
    errmess: null,
    leaders: []
   },action)=>{

    switch(action.type){
        case ActionTypes.DISH_LOADING:
            return {...state, isLoading: true, errmess: null, leaders: []};

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading:false, errmess:action.payload, leaders: []};

        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading:false, errmess: null, leaders: action.payload};

        default:
            return state;
        
        
    }
    
}