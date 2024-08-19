const TokenModel = require("../models/Token"); // Импорт TokenModel
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: "30m"});
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: "30d"});
  return {
    accessToken,
    refreshToken
  };
};

const saveToken = async (userId, refreshToken) => {
  const tokenData = await TokenModel.findOne({user: userId}); // Ищем токен по userId
  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    await tokenData.save();
    return tokenData;
  }
  const token = await TokenModel.create({user: userId, refreshToken}); // Создаем новую запись, если токен не найден
  return token;
};

const removeToken = async (refreshToken) => {
  const tokenData = await TokenModel.deleteOne({refreshToken});
  return tokenData;
}

module.exports = {
  generateToken,
  saveToken
};
