require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser'); // Исправлено на cookieParser
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./src/routing/post-routes');
const authRoutes = require('./src/routing/auth-routes');
const handleError = require('./src/utils/handleError');

const PORT = process.env.PORT || 5000; // Определение переменной PORT
const app = express();

app.use(express.json());
app.use(cookieParser()); // Исправлено на cookieParser
app.use(cors());

// Подключение маршрутов
app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);

// Обработчик ошибок должен быть последним
app.use(handleError);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
    });
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
