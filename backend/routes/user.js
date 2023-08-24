const express = require('express');
const { loginUser, signupUser, fetchUsers } = require('../controllers/userController');

// controller function

const router = express.Router();

// get all users
router.get('', fetchUsers)

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// find one user
router.get('/:userId', )

module.exports = router
