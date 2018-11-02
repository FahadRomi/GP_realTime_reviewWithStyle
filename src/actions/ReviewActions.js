import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const reviewUpdate = ({ prop, value }) => {
  return {
    type: 'REVIEW_TYPE',
    payload: { prop, value }
  };
};

export const WriteReview = ({ UserName, UserComment, rate, rateing_image, uid }) => {

 const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/Businesses/${uid}/Reviews`)
      .push({ UserName, UserComment, rate, rateing_image })
      .then(firebase.database().ref(`/Users/${currentUser.uid}/Reviews`)
        .push({ UserName, UserComment, rate, rateing_image })
        .then(() => {
        dispatch({ type: 'REVIEW_CREATE' });
        Actions.pop();
      })
        );
  };
};


export const ReviewsFetch = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/Businesses/${uid}/Reviews`)
      .on('value', snapshot => {
        dispatch({ type: 'REVIEWS_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};
