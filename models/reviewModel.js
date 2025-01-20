const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    apiId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Api',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    reviewText: {
        type: String,
        default: '',
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Review', reviewSchema);

