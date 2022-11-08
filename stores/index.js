import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import projectReducer from './reducers/projectReducer';
import categoryReducer from './reducers/categoryReducer';
import userReducer from './reducers/userReducer';
import chatReducer from './reducers/chatReducer';

const rootReducer = combineReducers({ project: projectReducer, category: categoryReducer, user: userReducer, chat: chatReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
