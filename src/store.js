import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducer/user';
import postReducer from './reducer/post';
import commentReducer from './reducer/comment';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducers = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
})
const middleware = applyMiddleware(logger, thunk)
export default createStore(reducers, middleware)
