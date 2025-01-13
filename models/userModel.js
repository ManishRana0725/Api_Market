const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['admin', 'contributor', 'user'],
        default: 'user',
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'API', // Reference to the API collection
    }],
    activityLog: [{
        action: { type: String, required: true }, // e.g., "Added API", "Rated API"
        timestamp: { type: Date, default: Date.now },
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update `updatedAt` field on save
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('User', userSchema);
