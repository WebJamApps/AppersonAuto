import { combineReducers } from 'redux';
import imagesReducer from './reducers/imagesReducer';
import authReducer from './reducers/authReducer';
import familyReducer from './reducers/familyReducer';
import youthReducer from './reducers/youthReducer';
import booksReducer from './reducers/booksReducer';

const reducer = combineReducers({
  images: imagesReducer,
  auth: authReducer,
  familyPics: familyReducer,
  youthPics: youthReducer,
  books: booksReducer,
});

export default reducer;
