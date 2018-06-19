const { assert } = require('chai');
const User = require('../../lib/models/User');

describe('User model test', () => {
  it('Valid good model', () => {

    const data = {
      name: 'henry',
      email: 'henry@henry.com',
    };

    const user = new User(data);
    data._id = user._id;

    assert.deepEqual(user.toJSON(), data);
    
  });

});