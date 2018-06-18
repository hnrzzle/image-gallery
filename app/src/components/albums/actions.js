import { ALBUMS_LOAD, ALBUM_ADD, LOAD_IMAGES, IMAGE_ADD } from './reducers';
import { getAllAlbums, getAlbum, postAlbum, getImages, postImage } from '../../services/api';

export const loadAlbums = () => dispatch => {
  getAllAlbums()
    .then(
      albums => {
        console.log(albums);
        dispatch({
          type: ALBUMS_LOAD,
          payload: albums
        });
      },
      err => {
        console.error(err);
      }
    );
};