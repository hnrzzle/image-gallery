import React, { Component } from 'react';
import { getImages } from './reducers';
import { loadImages } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ImageList extends Component {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    images: PropTypes.array,
    loadImages: PropTypes.func.isRequired
  };

  render() {

    return (
      <h3>List View</h3>      
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadImages }
)(ImageList);
