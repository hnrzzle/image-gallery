import React, { Component, Fragment } from 'react';
import Thumbnail from './Thumbnail';
import styles from './AlbumThumbnails.css';

export default class AlbumThumbnails extends Component {
  
  render() {
    return (
      <Fragment>
        <h3>Thumbnail View</h3>
        <ul className={styles.thumbnails}>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
        </ul>
      </Fragment>
    );
  }
}