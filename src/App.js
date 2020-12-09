import React, { Component, Fragment } from 'react';
import './App.css';

// import Card from './Components/CardComponent';
import CardList from './Components/CardList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">{this.props.title}</div>
        {/* <Card /> */}
        <hr />
        <CardList />
      </Fragment>
    );
  }
}

export default App;