import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Album.css';


export default class Album extends Component {
  render() {
    return (
      <li className={styles.album}>
        <img className="posterimage" src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg"/>
        <div>
          <h2>Album Title</h2>
          <p className="album-description">Album Description</p>
        </div>
      </li>
    );
  }
}