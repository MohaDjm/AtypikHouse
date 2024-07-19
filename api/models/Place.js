const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: [{ type: String }],
  description: {
    type: String,
  },
  perks: [{ type: String }],
  extraInfo: {
    type: String,
  },
  maxGuests: {
    type: Number,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
    enum: ['Treehouse', 'Yurt', 'Boat', 'Cave', 'Igloo', 'Other'],
    required: true,
  },
  amenities: [{ type: String }],
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;