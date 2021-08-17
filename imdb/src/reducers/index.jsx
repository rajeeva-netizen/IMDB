import { combineReducers } from 'redux';
import searchReducer from './searchreducer';

//combining all the reducers using the combineReducers

export default combineReducers({
  movies: searchReducer
});