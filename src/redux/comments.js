import * as ActionTypes from './Actions/ActionTypes'

export const Comments = (state = {
    isLoding: true,
    errmess: null,
    comments: []

    }, action)=>{

    switch(action.type){
       case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toISOString();

        return state.comments.concat(comment);

        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoding: true, errmess: null, comments: []};

        case ActionTypes.COMMENTS_FAILED: 
            return {...state, isLoding:false, errmess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoding: false, errmess: null, comments: action.payload}
        
            default:
                return state;
    }
}