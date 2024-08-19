const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

// Создаем модель на основе схемы
const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
