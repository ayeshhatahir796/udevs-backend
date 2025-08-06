const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const result = await User.getAllUsers();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await User.createUser(name, email);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  addUser
};

