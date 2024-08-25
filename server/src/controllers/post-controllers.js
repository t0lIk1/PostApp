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
const editPost = (req, res) => {

}
const deletePost = (req, res) => {

}
const getPost = (req, res) => {

}


module.exports = {getPost, createPost, editPost, deletePost}

