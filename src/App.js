import React, { Component } from 'react';
import './App.css';

import VisibleTransactions from './containers/VisibleTransactions';

class App extends Component {
  addTrans = () => {
    console.log('Add trans');
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <VisibleTransactions />
        <button onClick={() => this.addTrans()}>Add trans</button>
      </div>
    );
  }
}

export default App;
