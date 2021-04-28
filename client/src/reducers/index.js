import { combineReducers } from 'redux';
import { zombiesReducer } from './zombies'


export default combineReducers({
    zombies: zombiesReducer
    
});
