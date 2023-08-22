const express = require('express');
const { postInterview, fetchInterviews } = require('../controllers/interviewController');


const router = express.Router();

router.post('/', postInterview).get('/', fetchInterviews)



module.exports = router
