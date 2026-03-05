const express = require('express');
const { createComment, getComments, getCommentById, deleteComment, updateComment } = require('../controllers/commentController.js');
const router = express.Router();

router.post('/comment', createComment);
router.get('/comment', getComments);
router.get('/comment/:id', getCommentById);
router.delete('/comment/:id', deleteComment);
router.put('/comment/:id', updateComment);

module.exports = router;