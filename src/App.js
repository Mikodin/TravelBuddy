import React, { Component } from 'react';
import './App.css';

import TransactionsList from './containers/TransactionsList.C';
import LoginContainer from './containers/Login.C';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skipLogin: false,
      isLoggedIn: false,
    };
  }

  skipLogin = () => {
    this.setState({ skipLogin: true });
  };

  login = isLoggedIn => {
    this.setState({ isLoggedIn });
  };

  render() {
    return (
      <div className="container App">
        {this.state.skipLogin || this.state.isLoggedIn ? (
          <TransactionsList />
        ) : (
          <LoginContainer login={this.login} skipLogin={this.skipLogin} />
        )}
      </div>
    );
  }
}

export default App;
