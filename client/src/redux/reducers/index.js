import { combineReducers } from 'redux';
import { default as postReducer } from './postReducer';

export default combineReducers({
    posts: postReducer
})