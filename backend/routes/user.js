const express = require('express');
const { loginUser, signupUser, fetchUsers, findOneUser } = require('../controllers/userController');

// controller function

const router = express.Router();


// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// find one user
router.get('/:userId', findOneUser )

// get all users
router.get('', fetchUsers)

module.exports = router
