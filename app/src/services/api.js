import { get } from './request';

const URL = 'mongodb://localhost:27017/images';
const PETS_URL = `${URL}/pets`;

export const getAllPets = () => get(PETS_URL);
export const getPet = id => get(`${PETS_URL}/${id}`);