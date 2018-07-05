import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import initialStore from './initialStore';

import posts from '../reducers/posts';
import auth from '../reducers/auth';

const rootReducer = combineReducers({
  posts,
  auth
});

const store = applyMiddleware(thunk,logger)(createStore)(rootReducer,initialStore);

export default store;
