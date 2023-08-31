const  jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn : '3d'})
}


// login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // console.log(email, password);
        const user = await User.login(email, password)
        console.log(user);
        const token = createToken(user._id)
        res.status(200).json({ email, token, _id : user._id })
        return
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // console.log(email, password);
        const user = await User.signup(email, password)
        console.log(user);
        const token = createToken(user._id)
        res.status(200).json({ email, token })
        return
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const fetchUsers = async (req, res) => {
    try {
        // console.log(email, password);
        const user = await User.find()
        // console.log(user);
        res.status(200).json({ user })
        return
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const findOneUser = async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId)

    res.status(200).json({ user })
}

module.exports = {
    signupUser,
    loginUser,
    fetchUsers,
    findOneUser

}
