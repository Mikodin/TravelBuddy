import { connect } from 'react-redux';
import { fbLoginAsync } from '../actions/User.A';
import Login from '../components/Login';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  onLogin: fbLoginAsync,
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
