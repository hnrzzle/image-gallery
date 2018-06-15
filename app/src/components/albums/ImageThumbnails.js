import React, { Component, Fragment } from 'react';
import Thumbnail from './Thumbnail';
import styles from './ImageThumbnails.css';

export default class ImageThumbnails extends Component {
  
  render() {
    return (
      <Fragment>
        <h3>Thumbnail View</h3>
        <ul className={styles.thumbnails}>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
          <Thumbnail/>
        </ul>
      </Fragment>
    );
  }
}