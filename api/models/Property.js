const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['boolean', 'text', 'number'], required: true },
  required: { type: Boolean, default: false },
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
