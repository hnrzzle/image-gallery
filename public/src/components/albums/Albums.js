import React, { Component, Fragment } from 'react';
import styles from './Albums.css';
import Album from './Album';

export default class Albums extends Component {
  render() {

    return (
      <Fragment>
        <h3>Albums</h3>
        <ul className={styles.albums}>
          <Album/>
          <Album/>
          <Album/>
          <Album/>
          <Album/>
          {/* {albums.map((album, i) => (
            <Album key={i} album={album}/>
          ))} */}
        </ul>
      </Fragment>
    );
  }
}