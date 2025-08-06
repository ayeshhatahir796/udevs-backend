const db = require('../config/db');

const getAllUsers = () => {
  return db.query('SELECT * FROM users');
};

const createUser = (name, email) => {
  return db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
};

module.exports = {
  getAllUsers,
  createUser
};
