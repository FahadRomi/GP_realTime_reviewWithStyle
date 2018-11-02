
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload, error: '' };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload, error: '' };
    case 'LOGIN_USER':
      return { ...state, loading: true, error: '' };
    case 'LOGIN_USER_SUCCESS':
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case 'LOGIN_USER_FAIL':
      return { ...state, error: action.payload.message, password: '', loading: false };
    default:
      return state;
  }
};
