const express = require('express');
const { createAuthor, getAuthors, getAuthorById, deleteAuthor, updateAuthor } = require('../controllers/authorController.js');
const router = express.Router();

router.post('/author', createAuthor);
router.get('/author', getAuthors);
router.get('/author/:id', getAuthorById);
router.delete('/author/:id', deleteAuthor);
router.put('/author/:id', updateAuthor);

module.exports = router;