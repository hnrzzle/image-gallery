const { assert } = require('chai');
const request = require('./request');
// const Album = require('../../lib/models/Album');
const { dropCollection } = require('./db');

describe('Album API', () => {
  before(() => dropCollection('albums'));

  const album = {
    title:  'Dark Side of the Moon',
    description:  'Pink Floyd in Space',
    posterImage:  'https://i.imgur.com/H5hI3FV.jpg'
  };

  it('Gets all albums', () => {
    return request.get('/api/albums')
      .then(({ body }) => {
      });
  });

  it('Saves and retrieves an album', () => {
    return request.post('api/albums/new')
      .send(album)
      .then(({ body }) => {
      });
  });

});