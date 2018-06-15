const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  id: String,
  albumId:  String,
  title:  String,
  description:  String,
  url:  String
});

module.exports = mongoose.model('Image', schema);