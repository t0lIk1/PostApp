const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Логируем стек ошибки для отладки

};

module.exports = errorHandler;
