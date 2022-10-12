import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return(
      <div>
        <h1>Hello, world.</h1>
        <h2>Hi, everyone.</h2>
      </div>
    );
  }
}

// ここ！！
ReactDOM.render(
  <React.Fragment>
    <Greeting />
    <Greeting />
  </React.Fragment>,
  document.getElementById('app')
);