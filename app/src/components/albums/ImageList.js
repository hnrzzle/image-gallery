import React, { Component, Fragment } from 'react';
import { getImages } from './reducers';
import { loadImages } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ImageList';

class ImageList extends Component {

  static propTypes = {
    albumId: PropTypes.string.isRequired,
    images: PropTypes.array,
    loadImages: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadImages(this.props.albumId);
  }

  render() {
    const { images } = this.props;

    return (
      <Fragment>
        <h3>Image Details</h3>
        <div className={styles.list}>
          <h4 className="title-header">Title</h4>
          <h4 className="description-header">Description</h4>
          <h4 className="url-header">URL</h4>
          {images.map((image, i) => (
            <Fragment  key={i}>
              <h4 className="title">{image.title}</h4>
              <span className="description">{image.description}</span>
              <span className="url">{image.url}</span>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadImages }
)(ImageList);
