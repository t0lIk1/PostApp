const {validationAccessToken} = require("../services/token-service");

module.exports = function (req, res, next) {
  try {
    const authorizationheader = req.headers.authorization;

    // Проверяем, что заголовок авторизации отсутствует
    if (!authorizationheader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    // Получаем токен из заголовка
    const accessToken = authorizationheader.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: 'Access token is missing' });
    }

    // Проверяем валидность токена
    const userData = validationAccessToken(accessToken);
    if (!userData) {
      return res.status(401).json({ message: 'Invalid access token' });
    }

    // Присваиваем данные пользователя объекту req
    req.user = userData;

    // Передаем управление следующему middleware
    next();
  } catch (e) {
    console.error('Authentication error:', e);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
