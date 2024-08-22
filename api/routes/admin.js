// admin.js

const express = require('express');
const adminController = require('../controllers/adminController');
const { isAdmin, isLoggedIn } = require('../middlewares/user');

const router = express.Router();

// Apply middlewares to all routes
router.use(isLoggedIn);
router.use(isAdmin);

// Routes pour la gestion des utilisateurs
router.get('/users', adminController.getAllUsers);
router.put('/update-user/:id', adminController.updateUser);
router.put('/update-user-role/:id', adminController.updateUserRole);
router.delete('/users/:id', adminController.deleteUser);

// Routes pour la gestion des perks
router.get('/perks', adminController.getAllPerks);
router.post('/perks', adminController.addPerk);
router.delete('/perks/:name', adminController.deletePerk);

router.post('/add-property', adminController.addProperty);
router.put('/update-property/:id', adminController.updateProperty);
router.delete('/delete-property/:id', adminController.deleteProperty);

// Routes pour la gestion des commentaires et du profil utilisateur
router.get('/comments', adminController.getAllComments);
router.delete('/delete-comment/:id', adminController.deleteComment);

router.put('/update-profile/:id', adminController.updateUserProfile);

module.exports = router;
