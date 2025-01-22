const mongoose = require('mongoose');

// Define the Category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
        trim: true,
    },
});

// Create a model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
