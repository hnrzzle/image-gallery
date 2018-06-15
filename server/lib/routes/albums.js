const router = require('express').Router();
const Album = require('../models/Album');
const errorHandler = require('../utils/error-handler');

module.exports = router
  .get('/', (req, res) => {
    Album.find(req.query)
      .lean()
      .then(albums => res.json(albums))
      .catch(err => errorHandler(err, req, res));
  })
  .get('/:id', (req, res) => {
    Album.findById(req.params.id)
      .lean()
      .then(album => res.json(album))
      .catch(err => errorHandler(err, req, res));
  })
  .post('/new', (req, res) => {
    Album.create(req.body)
      .then(album => res.json(album))
      .catch(err => errorHandler(err, req, res));
  })
  .delete('/:id', (req, res) => {
    Album.findByIdAndRemove(req.params.id)
      .then(removed => res.json(removed))
      .catch(err => errorHandler(err, req, res));
  });