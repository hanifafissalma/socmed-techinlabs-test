import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducer/user';
import postReducer from './reducer/post';
import commentReducer from './reducer/comment';
import albumReducer from './reducer/album';
import photoReducer from './reducer/photo';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducers = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    album: albumReducer, 
    photo: photoReducer,
})
const middleware = applyMiddleware(logger, thunk)
export default createStore(reducers, middleware)
