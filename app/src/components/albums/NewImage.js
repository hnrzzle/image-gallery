import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from './reducers';
import { addImage } from './actions';
import PropTypes from 'prop-types';
import styles from './NewAlbum.css';

const defaultState = {
  title: '',
  description: '',
  url: ''
};

class NewImage extends Component {
  
  static propTypes = {
    addImage: PropTypes.func.isRequired,
    albumId: PropTypes.string.isRequired,
    history: PropTypes.object
  };
  
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
    const { addImage, albumId } = this.props; 
    event.preventDefault();
    addImage(this.state.form, albumId);
    
    // this.props.history.push(`/albums/${albumId}/thumbnail`);
  };

  render() {

    const { title, description, url } = this.state.form;
    
    return (
      <div className={styles.newAlbum}>
        <h3>Add an Image:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange}/>
          <label>Link to Image:</label>
          <input type="text" name="url" value={url} onChange={this.handleChange}/>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={this.handleChange}/>
          <button type="submit">Add your Image</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { addImage }
)(NewImage);