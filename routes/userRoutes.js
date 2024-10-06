const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getOneUser);
router.post('/signup', userController.signUpUser);
router.post('/signin', userController.signInUser);

module.exports = router;

