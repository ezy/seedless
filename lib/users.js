// Disclaimer: This is not ready for production, obviously.
const _ = require('lodash');

const UsersDB = [
  {
    username: 'jenny',
    password: 'pink_panther', // User password
    scopes: ['private'], // Authorized actions
  },
  {
    username: 'bob',
    password: 'hammer_time',
    scopes: [],
  },
];

/**
  * Returns a user, given a username and valid password.
  *
  * @method login
  * @param {String} username - user id
  * @param {String} password  - Allow / Deny
  * @throws Will throw an error if a user is not found or if the password is wrong.
  * @returns {Object} user
  */
const login = (username, password) => {
  const user = _.find(UsersDB, { username });
  if (!user) throw new Error('User not found!');

  const hasValidPassword = (user.password === password);
  if (!hasValidPassword) throw new Error('Invalid password');

  return _.omit(user, 'password');
};

module.exports = {
  login,
};
