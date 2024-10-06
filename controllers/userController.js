const userService = require('../services/userService');

const signUpUser = async (req, res) => {
  return await userService.signUpUser(req, res);
}

const signInUser = async (req, res) => {
  return await userService.signInUser(req, res);
}

const getUsers = async (req, res) => {
  return await userService.getUsers(res);
}

const getOneUser = async (req, res) => {
  return await userService.getOneUser(req, res);
}


module.exports = {
  signUpUser,
  signInUser,
  getOneUser,
  getUsers,
}