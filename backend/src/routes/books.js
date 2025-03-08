const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')


router.get('/',controller.getBooks)
router.post('/',controller.addBook)
router.get('/:id',controller.getBookById)
router.put('/:id',controller.updateBook)
router.delete('/:id',controller.deleteBook)


module.exports = router