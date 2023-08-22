const Interview = require('../models/interviewModel');

// Create interview

const postInterview = async (req, res) => {
    try {
        const newInterview = await Interview.create({ ...req.body })

        res.status(200).json({ newInterview })

    } catch (error) {
        res.status(400).json({ error : error.message })

    }
}

const fetchInterviews = async (req, res) => {
    const allInterviews = await Interview.find();

    res.status(200).json(allInterviews)
}

module.exports = {
    postInterview,
    fetchInterviews
}
