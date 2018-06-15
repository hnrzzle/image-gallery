const router = require('express').Router();
const Image = require('../models/image');

module.exports = router
  .get('/', (req, res, next) => {
    Image.find()
      .select('title url albumId')
      .lean()
      .then(images => res.json(images))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .lean()
      .then(image => res.json(image))
      .catch(next);
  })
  .post('/:id', (req, res, next) => {
    Image.create(req.body)
      .then(album => res.json(album))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id)
      .then(removed => res.json(removed))
      .catch(next);
  });