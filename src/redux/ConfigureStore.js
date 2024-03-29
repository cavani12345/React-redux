import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes} from './dishes';
import { Leaders} from './leaders';
import {Comments } from './comments';
import {Promotion} from './promotions'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes:Dishes,
        comments:Comments,
        promotions: Promotion,
        leaders: Leaders
    }), applyMiddleware(thunk,logger));
    
    return store;
}