require('dotenv').config({ path: './test/e2e/.env' });
const connect = require('../../lib/connect');
const mongoose = require('mongoose');

before(() => connect(process.env.MONGO_URI));
after(() => mongoose.connection.close());

module.exports = {
  dropCollection(collection) {
    return mongoose.connection.dropCollection(collection)
      .catch(err => {
        if(err.codeName !== 'NamespaceNotFound') throw err;

      });
  }
};