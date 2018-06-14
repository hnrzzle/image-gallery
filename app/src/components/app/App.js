import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Header from './Header';
import Albums from '../albums/Albums';
import styles from '../../main.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav/>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/albums" component={Albums}/>
              {/*<Route exact path="/images" component={Images}/>
              <Route exact path="/albums/new" component={NewAlbum}/> */}
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer>
            <h3>{'I\'m the footer!'}</h3>
          </footer>
        </div>
      </Router>
    );
  }
}