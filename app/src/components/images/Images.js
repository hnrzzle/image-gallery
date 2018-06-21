import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../albums/reducers';
import { loadAllImages } from '../albums/actions';
import PropTypes from 'prop-types';
import styles from './Images.css';

class Images extends Component {

  static propTypes = {
    imagesAll: PropTypes.array,
    loadAllImages: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAllImages();
  }

  render() {
    const { imagesAll } = this.props;

    return (
      <Fragment>
        <h3>Images</h3>
        <ul className={styles.thumbnails}>
          {imagesAll.map((image, i) => (
            <Thumbnail key={i} image={image}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ imagesAll: getImagesAll(state) }),
  { loadAllImages }
)(Images);