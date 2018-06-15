const router = require('express').Router();
const Album = require('../models/albums');

module.exports = router
  .get('/', (req, res, next) => {
    Album.find()
      .lean()
      .then(albums => res.json(albums))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Album.findById(req.params.id)
      .lean()
      .then(album => res.json(album))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Album.create(req.body)
      .then(album => res.json(album))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(removed => res.json(removed))
      .catch(next);
  });