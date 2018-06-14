import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav/>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/albums" component={Albums}/>
            <Route exact path="/images" component={Images}/>
            <Route exact path="/albums/new" component={NewAlbum}/> */}
            <Redirect to="/"/>
          </Switch>
          <footer>
            <h3>{'I\'m the footer!'}</h3>
          </footer>
        </div>
      </Router>
    );
  }
}