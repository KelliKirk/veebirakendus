const express = require('express');
const { createArticle, getArticles, getArticleById, deleteArticle, updateArticle, addCommentToArticle } = require('../controllers/articleController.js');
const router = express.Router();

router.post('/article', createArticle);
router.post('/article/:id/comment', addCommentToArticle);
router.get('/article', getArticles);
router.get('/article/:id', getArticleById);
router.delete('/article/:id', deleteArticle)
router.put('/article/:id', updateArticle)



module.exports = router;