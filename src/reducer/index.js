import { combineReducers } from 'redux';
import BusinessesReducer from './BusinessesReducer';
import AuthReducer from './AuthReducer';
import ReviewFormReducer from './ReviewFormReducer';
import ReviewsReducer from './ReviewsReducer';


export default combineReducers({
  auth: AuthReducer,
  businesses: BusinessesReducer,
  reviewForm: ReviewFormReducer,
  reviews: ReviewsReducer
});
