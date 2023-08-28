const express = require('express');
const { postInterview, fetchInterviews } = require('../controllers/interviewController');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

router.use(requireAuth)
router.post('/', postInterview).get('/', fetchInterviews)



module.exports = router
