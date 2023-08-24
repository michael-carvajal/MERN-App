const User = require('../models/userModel')

// login user

const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // console.log(email, password);
        const user = await User.signup(email, password)
        // console.log(user);
        res.status(200).json({ email, user })
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
    const user =  await User.findById()
}

module.exports = {
    signupUser,
    loginUser,
    fetchUsers
}
