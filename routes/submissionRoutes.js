
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const SubmissionCtrl = require('../controllers/submissionCtrl');

// Add a new submission (User)
router.post('/', auth, SubmissionCtrl.addSubmission);

// Get all submissions (Admin)
router.get('/all', auth, authAdmin, SubmissionCtrl.getAllSubmissions);

// Approve a submission (Admin) id of submission
router.put('/approve/:id', auth, authAdmin, SubmissionCtrl.approveSubmission);

// Reject a submission (Admin) id of submission
router.delete('/reject/:id', auth, authAdmin, SubmissionCtrl.rejectSubmission);

// Get a specific submission (Admin) 
router.get('/:id', auth, authAdmin, SubmissionCtrl.getSubmissionById);

module.exports = router;
