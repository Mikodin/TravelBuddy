import React, { Component } from 'react';
import './App.css';

import LoginContainer from './containers/Login.C';
import TransactionsHomeContainer from './containers/TransactionsHome.C';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skipLogin: false,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const skipLogin = localStorage.getItem('skipLogin');
    this.setState({ skipLogin });
  }

  skipLogin = () => {
    this.setState({ skipLogin: true });
    localStorage.setItem('skipLogin', true);
  };

  login = isLoggedIn => {
    this.setState({ isLoggedIn });
  };

  render() {
    return (
      <div className="container App">
        {this.state.skipLogin || this.state.isLoggedIn ? (
          <TransactionsHomeContainer />
        ) : (
          <LoginContainer login={this.login} skipLogin={this.skipLogin} />
        )}
      </div>
    );
  }
}

export default App;
