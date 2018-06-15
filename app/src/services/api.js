import { get } from './request';

const URL = 'mongodb://localhost:27017/images';


export const getAllAlbums = () => get(URL);
export const getAlbum = id => get(`${URL}/${id}`);
