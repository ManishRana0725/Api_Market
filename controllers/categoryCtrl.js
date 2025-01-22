const Category = require('../models/categoryModel'); // Import the Category schema

const CategoryCtrl = {
    // Add a new category (Admin only)
    addCategory: async (req, res) => {
        try {
            const { name , description } = req.body;

            // Validate required field
            if (!name) {
                return res.status(400).json({ msg: 'Please provide a category name' });
            }

            // Check if the category already exists
            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
                return res.status(400).json({ msg: 'Category already exists' });
            }

            // Create a new category
            
            const newCategory = new Category({ name , description});
            console.log(newCategory);
            await newCategory.save();
            
            res.status(201).json({ msg: 'Category added successfully', category: newCategory });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Get all categories
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Update a category (Admin only)
    updateCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const {description} = req.body;
            // Validate required field
            if (!name) {
                return res.status(400).json({ msg: 'Please provide a category name' });
            }

            // Find and update the category
            const updatedCategory = await Category.findByIdAndUpdate(
                id,
                { name , description},
                { new: true } // Return the updated document
                
            );

            if (!updatedCategory) {
                return res.status(404).json({ msg: 'Category not found' });
            }

            res.status(200).json({ msg: 'Category updated successfully', category: updatedCategory });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Delete a category (Admin only)
    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;

            // Find and delete the category
            const deletedCategory = await Category.findByIdAndDelete(id);

            if (!deletedCategory) {
                return res.status(404).json({ msg: 'Category not found' });
            }

            res.status(200).json({ msg: 'Category deleted successfully' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Get a single category by ID
    getCategoryById: async (req, res) => {
        try {
            const { id } = req.params;

            // Find the category by ID
            const category = await Category.findById(id);

            if (!category) {
                return res.status(404).json({ msg: 'Category not found' });
            }

            res.status(200).json(category);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = CategoryCtrl;

