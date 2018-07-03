import { createStore } from 'redux';
import { combineReducers } from 'redux';

import posts from './reducers/posts';

export default combineReducers({
    posts,
});

export default createStore(reducers);
