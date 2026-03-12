const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.post('/books', booksController.createBook);
router.get('/books/isbn/:isbn', booksController.getBookByISBN);

module.exports = router;