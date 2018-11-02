

const INITIAL_STATE = {
  UserName: '',
  UserComment: '',
  rateing_image: '',
  rate: ''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REVIEW_TYPE':
      return { ...state, [action.payload.prop]: action.payload.value };
    case 'REVIEW_CREATE':
      return INITIAL_STATE;
    case 'REVIEW_SAVE_SUCCESS':
      return INITIAL_STATE;
  default:
      return state;
  }
};
