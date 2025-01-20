const express = require('express');
const reviewCtrl = require('../controllers/reviewCtrl');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/api/:apiId/reviews', auth, reviewCtrl.addReview); // Add a review
router.get('/api/:apiId/reviews', reviewCtrl.getReviews); // Get reviews
router.delete('/api/:apiId/reviews/:reviewId', auth, reviewCtrl.deleteReview); // Delete a review
router.patch('/api/:apiId/reviews/:reviewId', auth, reviewCtrl.updateReview); // Update a review

module.exports = router;
