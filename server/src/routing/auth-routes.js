const Router = require('express').Router;
const router = new Router();
const {login, logout, registration} = require('../controllers/auth-controllers');
const {registrationValidator, loginValidator} = require('../../validation')
// Маршруты для аутентификации
router.post('/registration', registrationValidator, registration);
router.post('/login', loginValidator, login);
router.post('/logout', logout);

module.exports = router;
