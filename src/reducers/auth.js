// @flow
import initialStore from '../store/initialStore';

type AuthContainer = {
  authenticated: boolean,
  loading: true,
  error: ?string,
}

const authReducer = (state: PostsContainer = initialStore.auth, action) => {
  switch(action.type){
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
			return {
        authenticated: true,
        loading: false
      };

    case 'LOGIN_ERROR':
			return {
        ...state,
        error: action.error
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'LOGOUT_SUCCESS':
			return {
        ...action.data,
        authenticated: false,
        loading: false
      };

    case 'LOGOUT_ERROR':
			return {
        ...state,
        error: action.error
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'REGISTER_SUCCESS':
			return {
        ...action.data,
        authenticated: true,
        loading: false
      };

    case 'REGISTER_ERROR':
			return {
        ...state,
        error: action.error
      };


    default:
      return state || initialStore.auth;
	}
};

export default authReducer;
