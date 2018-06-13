import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    );
  }
}