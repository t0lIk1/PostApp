const Router = require('express').Router;
const router = new Router();
const {login, logout, registration, getUsers} = require('../controllers/auth-controllers');
const {registrationValidator, loginValidator} = require('../../validation')
const authMiddleware = require('../middlewares/auth-midleware');
// Маршруты для аутентификации
router.post('/registration', registrationValidator, registration);
router.post('/login', loginValidator, login);
router.post('/logout', logout);
router.post('/refresh', logout);
router.get('/users', authMiddleware, getUsers);

module.exports = router;
