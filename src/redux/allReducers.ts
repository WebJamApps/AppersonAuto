import { combineReducers } from 'redux';
import imagesReducer from './reducers/imagesReducer';
import authReducer from './reducers/authReducer';
import booksReducer from './reducers/booksReducer';

const reducer = combineReducers({
  images: imagesReducer,
  auth: authReducer,
  books: booksReducer,
});

export default reducer;
