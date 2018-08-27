import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import userReducer from './userReducer';

export default combineReducers({
  page: pageReducer,
  user: userReducer,
});
