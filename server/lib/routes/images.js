const router = require('express').Router();
const Image = require('../models/image');

module.exports = router
  .get('/', (req, res, next) => {
    Image.find()
      .select('name').lean()
      .then(images => res.json(images))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .lean()
      .then(image => res.json(image))
      .catch(next);
  });