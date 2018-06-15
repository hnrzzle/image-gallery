import React, { Component } from 'react';
import styles from './Thumbnail.css';

export default class Thumbnail extends Component {
  
  render() {
    return (
      <li className={styles.thumbnail}>
        <img className="thumbnail-image" src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg"/>
        <h2>Image Title</h2>
        <p className="image-description">Image Description</p>
      </li>
    );
  }
}