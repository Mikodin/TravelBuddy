import { connect } from 'react-redux';
import { fbLogin } from '../actions/User.A';
import Login from '../components/Login';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  onLogin: fbLogin,
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
