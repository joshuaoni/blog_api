const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getOneCategory);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.editCategory);

module.exports = router;