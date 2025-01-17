
const mongoose = require('mongoose');

// Define the Submission schema
const submissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    pricing: {
        free: { type: String, required: true }, // Same as API schema
        paid: { type: String, required: true }, // Same as API schema
    },
    endpoints: [
        {
            url: { type: String, required: true },
            method: { type: String, required: true },
            description: { type: String, required: true },
        },
    ],
    documentationLink: {
        type: String,
        required: true,
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User schema
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Submission', submissionSchema);
