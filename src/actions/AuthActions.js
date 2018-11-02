import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_USER' });

    firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch((error) => loginUserFail(dispatch, error));
	};
};

export const RegisterUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_USER' });

    firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch((error) => loginUserFail(dispatch, error));
	};
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: 'LOGIN_USER_FAIL',
    payload: error
   });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'LOGIN_USER_SUCCESS',
    payload: user
  });

  Actions.Main();
};
