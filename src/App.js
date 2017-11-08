import React, { Component } from 'react';
import './App.css';

import VisibleTransactions from './containers/TransactionsList.C';
import LoginContainer from './containers/Login.C';

class App extends Component {
  addTrans = () => {
    console.log('Add trans');
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <VisibleTransactions />
        <LoginContainer />
        <button onClick={() => this.addTrans()}>Add trans</button>
      </div>
    );
  }
}

export default App;
