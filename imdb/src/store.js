import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers';
// middle ware thunk is used for async process

const middleware = [thunk];
const initialState = {};

//store is saved my creating the store and root reducer is saved 
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  export default store