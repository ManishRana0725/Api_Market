const express = require('express');
const CategoryCtrl = require('../controllers/categoryCtrl');
const auth = require('../middleware/auth'); // Middleware for authentication
const authAdmin = require('../middleware/authAdmin'); // Middleware for admin authorization

const router = express.Router();

// Add a new category (Admin only)
router.post('/addnew', auth, authAdmin, CategoryCtrl.addCategory);

// Get all categories
router.get('/all', CategoryCtrl.getAllCategories);

// Update a category by ID (Admin only)
router.patch('/:id', auth, authAdmin, CategoryCtrl.updateCategory);

// Delete a category by ID (Admin only)
router.delete('/:id', auth, authAdmin, CategoryCtrl.deleteCategory);

// Get a single category by ID
router.get('/:id', CategoryCtrl.getCategoryById);

module.exports = router;

