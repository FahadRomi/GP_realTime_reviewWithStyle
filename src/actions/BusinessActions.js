import firebase from 'firebase';

export const BusinessesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/Businesses')
      .on('value', snapshot => {
        dispatch({ type: 'BUSINESSES_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};
