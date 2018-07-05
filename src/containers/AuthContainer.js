import { connect } from 'react-redux';
import { login, register, logout } from '../actions/auth';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  register: (registrationForm) => dispatch(register(registrationForm))
});

export function authContainer(Component){
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
