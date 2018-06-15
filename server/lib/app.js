const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

const images = require('./routes/images');

app.use('/api/images', images);

app.use((req, res) => {
  res.sendFile('index.html', { root: '../public/src'} );
});

app.use(errorHandler());

module.exports = app;