import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Albums.css';

export default class Albums extends Component {
  render() {

    return (
      <ul className={styles.albums}>
        <li className={styles.album}>
          <Link to="/albums/:id">
            <img className="posterimage" src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg"/>
            <h2>Album Title</h2>
            <p className="album-description">Album Description</p>
          </Link>
        </li>
        {/* {albums.map((album, i) => (
          <Album key={i} album={album}/>
        ))} */}
      </ul>
    );
  }
}