const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const PostModel = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'Пользователь не авторизован', header: req.headers.authorization});
    }
    const decoded = jwt.decode(token, process.env.JWT_REFRESH_TOKEN);
    const userId = decoded.id;

    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({message: 'Пользователь не найден'});
    }

    const {title, text} = req.body;
    const post = await PostModel.create({
      authorName: user.name,
      authorId: userId,
      title,
      text
    });

    return res.status(200).json(post)
  } catch (e) {
    return res.status(500).json({message: 'Internal server error', err: e.message});
  }
}

const editPost = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'Пользователь не авторизован'});
    }
    const decoded = jwt.decode(token, process.env.JWT_REFRESH_TOKEN);
    const userId = decoded.id;

    const {postId} = req.params;
    const {title, text} = req.body;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({message: 'Пост не найден'});
    }

    // Проверяем, является ли пользователь автором поста
    if (post.authorId.toString() !== userId) {
      return res.status(403).json({message: 'Доступ запрещен'});
    }

    // Обновляем данные поста
    post.title = title || post.title;
    post.text = text || post.text;

    await post.save();

    return res.status(200).json(post);
  } catch (e) {
    return res.status(500).json({message: 'Internal server error', err: e.message});
  }
}

const deletePost = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'Пользователь не авторизован'});
    }
    const decoded = jwt.decode(token, process.env.JWT_REFRESH_TOKEN);
    const userId = decoded.id;

    const {postId} = req.params;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({message: 'Пост не найден'});
    }

    // Проверяем, является ли пользователь автором поста
    if (post.authorId.toString() !== userId) {
      return res.status(403).json({message: 'Доступ запрещен'});
    }

    // Удаляем пост
    await post.deleteOne();

    return res.status(200).json({message: 'Пост успешно удален'});
  } catch (e) {
    return res.status(500).json({message: 'Internal server error', err: e.message});
  }
}

const getPost = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'Пользователь не авторизован'});
    }


    const posts = await PostModel.find();
    if (!posts) {
      return res.status(404).json({message: 'Посты не найден'});
    }

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json({message: 'Internal server error', err: e.message});
  }
}


module.exports = {getPost, createPost, editPost, deletePost}

