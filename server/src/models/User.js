const mongoose = require('mongoose');

// Создаем схему пользователя
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true // Убирает лишние пробелы
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Приводит email к нижнему регистру
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Минимальная длина пароля
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Допустимые роли
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now, // Дата создания пользователя
  }
}, {
  timestamps: true // Автоматически добавляет поля createdAt и updatedAt
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
