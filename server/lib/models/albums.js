const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  id: String,
  title:  String,
  description:  String,
  posterImage:  String
});

module.exports = mongoose.model('Image', schema);