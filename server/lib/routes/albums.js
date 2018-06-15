const router = require('express').Router();
const Album = require('../models/albums');

module.exports = router
  .get('/', (req, res, next) => {
    Album.find()
      .select('name').lean()
      .then(albums => res.json(albums))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Album.findById(req.params.id)
      .lean()
      .then(album => res.json(album))
      .catch(next);
  });