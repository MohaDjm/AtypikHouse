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

// Routes pour la gestion des propriétés
router.get('/places', adminController.getAllPlaces);
router.post('/places', adminController.addPlace);
router.put('/places/:id', adminController.updatePlace);
router.delete('/places/:id', adminController.deletePlace);

router.put('/update-profile/:id', adminController.updateUserProfile);

module.exports = router;
