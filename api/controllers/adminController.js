const User = require('../models/User');
const Property = require('../models/Property');
const Equipment = require('../models/Equipment');

// Gestion des utilisateurs
exports.createManager = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password, isAdmin: true });
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création du gestionnaire',
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res
      .status(200)
      .json({ message: 'User updated successfully', data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Fonction pour mettre à jour le rôle d'un utilisateur
exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Utilisateur supprimé' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la suppression de l'utilisateur",
      error,
    });
  }
};

// Gestion des perks
const Place = require('../models/Place');

const basePerks = [
  { name: 'wifi' },
  { name: 'parking' },
  { name: 'tv' },
  { name: 'radio' },
  { name: 'pets' },
  { name: 'enterence' },
];

exports.getAllPerks = async (req, res) => {
  try {
    const places = await Place.find();
    const allPerks = new Set(basePerks.map((perk) => JSON.stringify(perk)));

    // Ajout des perks utilisées dans les places
    places.forEach((place) => {
      place.perks.forEach((perk) => {
        const icon = basePerks.find((p) => p.name === perk)?.icon || '';
        allPerks.add(JSON.stringify({ name: perk, icon }));
      });
    });

    res.status(200).json({
      success: true,
      data: Array.from(allPerks).map((perk) => JSON.parse(perk)),
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Erreur interne du serveur' });
  }
};

exports.addPerk = async (req, res) => {
  try {
    const { name } = req.body;
    const place = await Place.findOne();
    place.perks.push(name);
    await place.save();
    res.status(201).json({ success: true, data: place.perks });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Erreur interne du serveur' });
  }
};

exports.deletePerk = async (req, res) => {
  try {
    const { name } = req.params;
    const place = await Place.findOne();
    place.perks = place.perks.filter((perk) => perk !== name);
    await place.save();
    res.status(200).json({ success: true, data: place.perks });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Erreur interne du serveur' });
  }
};

// Gestion des propriétés
exports.addProperty = async (req, res) => {
  try {
    const { name, type, required } = req.body;
    const property = new Property({ name, type, required });
    await property.save();
    res.status(201).json({ success: true, data: property });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'ajout de la propriété",
      error,
    });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, required } = req.body;
    const property = await Property.findByIdAndUpdate(
      id,
      { name, type, required },
      { new: true }
    );
    res.status(200).json({ success: true, data: property });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour de la propriété',
      error,
    });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    await Property.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Propriété supprimée' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression de la propriété',
      error,
    });
  }
};

// Gestion des commentaires
exports.getAllComments = async (req, res) => {
  try {
    // Logique pour récupérer tous les commentaires
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des commentaires',
      error,
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    // Logique pour supprimer un commentaire
    res.status(200).json({ success: true, message: 'Commentaire supprimé' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du commentaire',
      error,
    });
  }
};

// Mise à jour du profil utilisateur
exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du profil utilisateur',
      error,
    });
  }
};

// Récupération de tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Récupère tous les utilisateurs
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Erreur interne du serveur', error });
  }
};
