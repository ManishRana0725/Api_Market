const Review = require('../models/reviewModel'); // Import the Review schema
const API = require('../models/apiModel'); // Import the API schema if needed for validation

const reviewCtrl = {
    // Add a new review to a specific API
    addReview: async (req, res) => {
        try {
            const { apiId } = req.params;
            const { rating, reviewText } = req.body;

            // Ensure the rating is within the valid range
            if (rating < 1 || rating > 5) {
                return res.status(400).json({ msg: "Rating must be between 1 and 5" });
            }

            // Check if the API exists
            const api = await API.findById(apiId);
            if (!api) {
                return res.status(404).json({ msg: "API not found" });
            }

            // Create a new review
            const newReview = new Review({
                apiId,
                userId: req.user.id, // The authenticated user's ID
                rating,
                reviewText,
                timestamp: Date.now(),
            });

            // Save the review
            await newReview.save();

            res.status(201).json({ msg: "Review added successfully", review: newReview });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Get reviews for a specific API
    getReviews: async (req, res) => {
        try {
            const { apiId } = req.params;

            // Fetch reviews for the API
            const reviews = await Review.find({ apiId }).populate('userId', 'username'); // Populate user info if needed

            if (!reviews || reviews.length === 0) {
                return res.status(404).json({ msg: "No reviews found for this API" });
            }

            res.status(200).json({ reviews });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Delete a review by its ID
    deleteReview: async (req, res) => {
        try {
            const { reviewId } = req.params;
    
            // Find the review
            const review = await Review.findById(reviewId);
            if (!review) {
                return res.status(404).json({ msg: "Review not found" });
            }
    
            // Allow deletion only if the user owns the review or is an admin
            if (review.userId.toString() !== req.user.id && req.user.role !== 'admin') {
                return res.status(403).json({ msg: "Access denied. You cannot delete this review." });
            }
    
            // Delete the review
            await Review.findByIdAndDelete(reviewId);
    
            res.status(200).json({ msg: "Review deleted successfully" });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Update a review by its ID
    updateReview: async (req, res) => {
        try {
            const { reviewId } = req.params;
            const { rating, reviewText } = req.body;
    
            // Validate the rating
            if (rating && (rating < 1 || rating > 5)) {
                return res.status(400).json({ msg: "Rating must be between 1 and 5" });
            }
    
            // Find the review
            const review = await Review.findById(reviewId);
            if (!review) {
                return res.status(404).json({ msg: "Review not found" });
            }
    
            // Allow update only if the user owns the review
            if (review.userId.toString() !== req.user.id) {
                return res.status(403).json({ msg: "Access denied. You cannot update this review." });
            }
    
            // Update the review
            review.rating = rating || review.rating;
            review.reviewText = reviewText || review.reviewText;
            await review.save();
    
            res.status(200).json({ msg: "Review updated successfully", review });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    }
};

module.exports = reviewCtrl;

