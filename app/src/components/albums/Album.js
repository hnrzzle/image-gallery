import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Album.css';

export default class Album extends Component {
  render() {
    return (
      <Fragment>
        <li className={styles.album}>
          <Link to="/albums/:id">
            <img className="posterimage" src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg"/>
            <h2>Album Title</h2>
            <p className="album-description">Album Description</p>
          </Link>
        </li>
      </Fragment>
    );
  }
}