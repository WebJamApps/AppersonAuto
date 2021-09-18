import { combineReducers } from 'redux';
import imagesReducer from './reducers/imagesReducer';
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
  images: imagesReducer,
  auth: authReducer,
});

export default reducer;
