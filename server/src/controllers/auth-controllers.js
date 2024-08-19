const {registrationUser, loginUser} = require('../services/auth-service.js');
const handleError = require('../utils/handleError.js');
const {validationResult} = require("express-validator")
const {logoutUser} = require("../services/auth-service");


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
    })
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
    console.log(e)
  }
};

const logout = async (req, res, next) => {
  try {
    const {refreshToken} = req.cookies;
    const token = await logoutUser(refreshToken);
    res.clearCookie('refreshToken');
    return token;
  } catch (e) {
    next();
  }
};

module.exports = {registration, logout, login};
