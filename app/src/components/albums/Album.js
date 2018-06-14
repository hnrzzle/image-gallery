import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Album.css';


export class Album extends Component {
  render() {
    return (
      <li>
        <img src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg"/>
        <h2>Album Title</h2>
      </li>
    );
  }
}