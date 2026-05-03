const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category:    { type: String, required: true }, // e.g. "Engine", "Brakes", "Suspension"
    brand:       { type: String, default: '' },
    partNumber:  { type: String, default: '' },
    price:       { type: Number, required: true, min: 0 },
    stock:       { type: Number, required: true, default: 0 },
    images:      [{ type: String }],               // array of image URLs
    compatible:  [{ type: String }],               // compatible car models
    rating:      { type: Number, default: 0, min: 0, max: 5 },
    numReviews:  { type: Number, default: 0 },
    isFeatured:  { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Text index for search
productSchema.index({ name: 'text', description: 'text', category: 'text', brand: 'text' });

module.exports = mongoose.model('Product', productSchema);
