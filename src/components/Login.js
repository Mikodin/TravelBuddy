import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  loginToFb = (username, password) => {
    this.props.onLogin({ username, password }).then(res => console.log(res));
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.loginToFb(this.state.username, this.state.password);
          }}
        >
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />

          <input
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
