const { assert } = require('chai');
const request = require('./request');
// const Album = require('../../lib/models/Album');
const { dropCollection } = require('./db');

describe('Album API', () => {
  before(() => dropCollection('albums'));

  let album = {
    title:  'Dark Side of the Moon',
    description:  'Pink Floyd in Space',
    posterImage:  'https://i.imgur.com/H5hI3FV.jpg'
  };
  
  it('Saves and retrieves an album', () => {
    return request.post('/api/albums')
      .send(album)
      .then(({ body }) => {
        const { _id, __v } = body;
        assert.ok(_id);
        assert.equal(__v, 0);
        assert.deepEqual(body, {
          _id, __v,
          ...album
        });
        album = body;
      });
  });

  it('Gets an album by id', () => {
    return request.get(`/api/albums/${album._id}`)
      .then(({ body }) => {
        assert.deepEqual(body, album);
      })
  })

  it('Gets all albums', () => {
    return request.get('/api/albums')
      .then(({ body }) => {
        assert.deepEqual(body[0], album);
      });
  });
});