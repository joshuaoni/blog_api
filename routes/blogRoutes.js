const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getOneBlog);
router.post('/', authMiddleware.authenticate, blogController.createBlog);
router.put('/:id', authMiddleware.authenticate, blogController.editBlog);

module.exports = router;