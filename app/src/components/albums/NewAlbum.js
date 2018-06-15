import React, { Component } from 'react';
import styles from './NewAlbum.css';

export default class NewAlbum extends Component {
  render() {
    return (
      <div className={styles.newAlbum}>
        <h3>Create a New Album:</h3>
        <form>
          <label>Title:</label>
          <input type="text" name="title" />
          <label>Link to Image:</label>
          <input type="text" name="url" />
          <label>Description:</label>
          <textarea name="description" />
        </form>
      </div>
    );
  }
}