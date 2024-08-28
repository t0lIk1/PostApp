const Router = require('express').Router;
const router = new Router();
const { createPost, editPost, deletePost, getPost} = require('../controllers/post-controllers');

// Маршруты для управления постами
router.post('/create', createPost);
router.put('/edit/:postId', editPost);
router.delete('/delete/:postId', deletePost);
router.get('/get', getPost);

module.exports = router;
