import React, { Component } from 'react';
import styles from './NewAlbum.css';

const defaultState = {
  title: '',
  description: '',
  posterImage: ''
};

export default class NewImage extends Component {
  
  state = {
    form: defaultState
  };

  handleChange = ({ target }) => {
    this.setState(({ form }) => {
      return {
        form: {
          ...form,
          [target.name]: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {

    const { title, description, posterImage } = this.state.form;
    
    return (
      <div className={styles.newAlbum}>
        <h3>Add an Image:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange}/>
          <label>Link to Image:</label>
          <input type="text" name="posterImage" value={posterImage} onChange={this.handleChange}/>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={this.handleChange}/>
          <button type="submit">Create your Album</button>
        </form>
      </div>
    );
  }
}