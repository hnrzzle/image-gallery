import { get } from './request';

const URL = '/api';


export const getAllAlbums = () => get(URL);
export const getAlbum = id => get(`${URL}/${id}`);