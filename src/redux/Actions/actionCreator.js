import * as ActionTypes from './ActionTypes';
import {DISHES} from '../../shared/dishes';
import {baseUrl} from '../../shared/baseUrl';
 
export const addComment = (dishId,rating,author,comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// fetch dishes thunk

 export const fetchDishes = ()=> (dispatch) => {
    dispatch(dishLoading(true));

     return fetch(baseUrl + 'dishes')
            .then((response) => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }

            } , 
            
            error => {
                var errmess = new Error(error.message);
                throw errmess;

            })
            .then((response) => response.json())
            .then((dishes) => dispatch(addDishes(dishes)))
            .catch((error) => dispatch(dishesFailed(error.message)));
 }
 
   // dishesloading action creator
export const dishLoading = ()=> ({
    type: ActionTypes.DISH_LOADING
})
   // dishesfailed action creator
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISH_FAILED,
    paylaod: errmess
})

 // add dishes action creator
export const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
})

 // fetch leaders thunks
export const fetchLeaders = ()=> (dispatch) => {
    dispatch(leadersLoading(true));

     return fetch(baseUrl + 'leaders')
            .then((response) => response.json())
            .then((leaders) => dispatch(addLeaders(leaders)));
 }
  // leaders loading cation creator
 export const leadersLoading = () =>(
    {
        type: ActionTypes.LEADERS_LOADING
  })

  // leaderfailed action creator

 export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    paylaod:errmess
})

// addleaders action creator 

 export const addLeaders = (leaders) => ({
     type: ActionTypes.ADD_LEADERS,
     payload: leaders
 }) 


 // fetch comment thunks

export const fetchComments = ()=> (dispatch) => {
    dispatch(commentsLoading(true));

     return fetch(baseUrl + 'comments')
            .then((response) => response.json())
            .then((comments) => dispatch(addComments(comments)));
 }


 // commentsfailed action creator

 export const commentsLoading = () => ({
   type: ActionTypes.COMMENTS_LOADING
 })

 // Commentsfailed action creator

 export const commentsFailed = (errmess) => ({
     type: ActionTypes.COMMENTS_FAILED,
     paylaod: errmess
 })

 // addcomments action creator 

 export const addComments = (comments) => ({
     type: ActionTypes.ADD_COMMENTS,
     paylaod: comments
 })

