const Submissions = require('../models/submissionModel'); // Import the Submission schema
const API = require('../models/apiModel'); // Import the API schema

const SubmissionCtrl = {
    // Add a new submission
    addSubmission: async (req, res) => {
        try {
            const { name, description, category, pricing, endpoints, documentationLink } = req.body;

            // Validate required fields
            if (!name || !description || !category || !pricing || !endpoints || !documentationLink) {
                return res.status(400).json({ msg: 'Please provide all required fields' });
            }

            // Create a new submission
            const newSubmission = new Submissions({
                name,
                description,
                category,
                pricing,
                endpoints,
                documentationLink,
                submittedBy: req.user.id, // Attach the logged-in user ID
            });

            // Save submission to the database
            await newSubmission.save();
            res.status(201).json({ msg: 'Submission added successfully', submission: newSubmission });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Get all submissions (Admin only)
    getAllSubmissions: async (req, res) => {
        try {
            const submissions = await Submissions.find().populate('submittedBy', 'username email'); // Populate user info
            res.status(200).json(submissions);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Approve a submission (Admin only)
    approveSubmission: async (req, res) => {
        try {
            const { id } = req.params;

            // Find the submission by ID
            const submission = await Submissions.findById(id);
            if (!submission) {
                return res.status(404).json({ msg: 'Submission not found' });
            }

            // Create a new API entry based on the submission
            const newAPI = new API({
                name: submission.name,
                description: submission.description,
                category: submission.category,
                pricing: submission.pricing,
                endpoints: submission.endpoints,
                documentationLink: submission.documentationLink,
                createdBy: submission.submittedBy,
            });

            // Save the new API to the database
            await newAPI.save();

            // Delete the approved submission
            await Submissions.findByIdAndDelete(id);

            res.status(200).json({ msg: 'Submission approved successfully', api: newAPI });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Reject a submission (Admin only)
    rejectSubmission: async (req, res) => {
        try {
            const { id } = req.params;

            // Find the submission by ID
            const submission = await Submissions.findById(id);
            if (!submission) {
                return res.status(404).json({ msg: 'Submission not found' });
            }

            // Delete the submission
            await Submissions.findByIdAndDelete(id);

            res.status(200).json({ msg: 'Submission rejected successfully' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Get a single submission (Admin only)
    getSubmissionById: async (req, res) => {
        try {
            const { id } = req.params;

            // Find the submission by ID
            const submission = await Submissions.findById(id).populate('submittedBy', 'username email'); // Populate user info
            if (!submission) {
                return res.status(404).json({ msg: 'Submission not found' });
            }

            res.status(200).json(submission);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = SubmissionCtrl;
