const mongoose = require('mongoose');

// Define the API schema
const apiSchema = new mongoose.Schema({
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
        free: { type: String, required: true },  // Change to String
        paid: { type: String, required: true },  // Change to String
    },
    endpoints: [
        {
            url: { type: String, required: true },
            method: { type: String, required: true },
            description: { type: String, required: true },
        },
    ],
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    popularity: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: String,
        required: true,
        trim: true,
    },
    documentationLink: {
        type: String,
        required: true,
    },
});

// Create a model
const API = mongoose.model('API', apiSchema);

module.exports = API;
