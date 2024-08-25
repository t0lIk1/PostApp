const Router = require('express').Router;
const router = new Router();
const { createPost, editPost, deletePost } = require('../controllers/post-controllers');

// Маршруты для управления постами
router.post('/create', createPost);
router.put('/edit/:id', editPost);
router.delete('/delete/:id', deletePost);
router.get('/get', deletePost);

module.exports = router;
