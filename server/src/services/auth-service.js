const userModel = require('../models/User');
const {generateToken, saveToken} = require('./token-service');
const errorHandler = require("../utils/handleError");
const UserDto = require('../dto/user-dto');
const bcrypt = require('bcrypt');
const {clear} = require('cookie-parser')

const registrationUser = async (name, email, password) => {
  try {
    // Проверка существования пользователя
    const candidate = await userModel.findOne({email});
    if (candidate) {
      throw new Error(`User with email ${email} already exists`);
    }

    // Хеширование пароля
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await userModel.create({name, email, password: hashPassword});

    // Создание DTO и генерация токенов
    const userDto = new UserDto(user);
    const tokens = generateToken({id: userDto.id});

    // Сохранение токенов
    await saveToken(userDto.id, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: userDto,
    };
  } catch (e) {
    console.error(e);
    throw e; // Проброс ошибки для дальнейшей обработки
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await userModel.findOne({email});
    if (!user) {
      throw new Error(`There is no owner with this email ${email}`);
    }

    const passwordEquals = await bcrypt.compare(password, user.password);
    if (!passwordEquals) {
      throw new Error(`Password or email entered incorrectly`);
    }

    const userDto = new UserDto(user);
    const tokens = generateToken({id: userDto.id});

    await saveToken(userDto.id, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: userDto,
    };
  } catch (e) {
    console.error(e);
  }
};

const logoutUser = async (refreshToken) => {
  const token = await removeToken(refreshToken)
  return token;
};

const getAllUsers = async (req, res) => {
  // Логика получения всех пользователей
};

module.exports = {
  registrationUser,
  loginUser,
  logoutUser,
  getAllUsers,
};
