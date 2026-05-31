const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name:     { type: String, required: true },
  qty:      { type: Number, required: true, min: 1 },
  price:    { type: Number, required: true },
  image:    { type: String, default: '' },
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    shippingAddress: {
      fullName: { type: String, required: true },
      address:  { type: String, required: true },
      city:     { type: String, required: true },
      state:    { type: String, required: true },
      pincode:  { type: String, required: true },
      phone:    { type: String, required: true },
    },
    totalPrice:    { type: Number, required: true },
    isPaid:        { type: Boolean, default: false },
    paidAt:        { type: Date },
    isDelivered:   { type: Boolean, default: false },
    deliveredAt:   { type: Date },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: { type: String, default: 'COD' },
    notes:         { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
