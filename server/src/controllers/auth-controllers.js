const {registrationUser, loginUser} = require('../services/auth-service.js');
const handleError = require('../utils/handleError.js');
const {validationResult} = require("express-validator")
const {logoutUser, getAllUsers} = require("../services/auth-service");


const registration = async (req, res) => {

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array(),
    })
  }

  try {
    const {name, email, password} = req.body;
    const userData = await registrationUser(name, email, password);


    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
      httpOnly: true,
    });

    return res.json(userData);
  } catch (e) {
    handleError(e);

    return res.status(500).json({message: 'Registration failed', error: e.message});
  }
};

const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array(),
    });
  }

  try {
    const {email, password} = req.body;
    const userData = await loginUser(email, password);

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
      httpOnly: true,
    });

    return res.json(userData);
  } catch (e) {
    console.error(e);
    return res.status(500).json({message: 'Login failed', error: e.message});
  }
};

const logout = async (req, res, next) => {
  try {
    const {refreshToken} = req.cookies;
    await logoutUser(refreshToken);
    res.clearCookie('refreshToken');
    return res.status(200).json({message: 'Logout successful'});
  } catch (e) {
    console.error(e);
    return res.status(500).json({message: 'Logout failed', error: e.message});
  }
};


const refresh = async (req, res, next) => {
  try {
    const {refreshToken} = req.cookies;
    const userData = await refreshtoken(email, password);

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
      httpOnly: true,
    });

    return res.json(userData);
  } catch (e) {
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers()
    return res.json(users)
  } catch (e) {
    console.error(e);
  }
}

module.exports = {registration, logout, login, getUsers};
