import React, { Component } from 'react';
import BookList from './components/BookList';

export class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Hello Sam!</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
