import React, { Component } from 'react';
import Album from './Album';
import styles from './Albums.css';

export default class Albums extends Component {
  render() {

    // const { albums } = this.props;

    return (
      <ul className={styles.albums}>
        <Album/>
        {/* {albums.map((album, i) => (
          <Album key={i} album={album}/>
        ))} */}
      </ul>
    );
  }
}