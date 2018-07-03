import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import initialStore from './initialStore';

import posts from '../reducers/posts';

const rootReducer = combineReducers({
    posts
});

const store = applyMiddleware(thunk,logger)(createStore)(rootReducer,initialStore);

export default store;
