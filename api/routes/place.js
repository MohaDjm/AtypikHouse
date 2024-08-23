const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

const {
  addPlace,
  getPlaces,
  updatePlace,
  singlePlace,
  userPlaces,
  searchPlaces,
  addReview,
  getReviewsByPlace,
  replyToReview,
  deleteReview,
} = require('../controllers/placeController');

// Public route to get all places
router.route('/').get(getPlaces);

// Protected routes for managing places
router.route('/add-places').post(isLoggedIn, addPlace);
router.route('/user-places').get(isLoggedIn, userPlaces);
router.route('/update-place').put(isLoggedIn, updatePlace);

// Routes pour les avis (reviews)
router.post('/:placeId/reviews', isLoggedIn, addReview);
router.get('/:placeId/reviews', getReviewsByPlace);
router.post('/:placeId/reviews/:reviewId/reply', isLoggedIn, replyToReview);
router.delete('/:placeId/reviews/:reviewId', isLoggedIn, deleteReview);

// Public routes for accessing a single place and searching
router.route('/:id').get(singlePlace);
router.route('/search/:key').get(searchPlaces);

module.exports = router;
