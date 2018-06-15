import React, { Component } from 'react';
import styles from './Albums.css';

import Album from './Album';

export default class Albums extends Component {
  render() {

    return (
      <ul className={styles.albums}>
        <Album />
        {/* {albums.map((album, i) => (
          <Album key={i} album={album}/>
        ))} */}
      </ul>
    );
  }
}