import mongoose from 'mongoose';

const ShippingSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    notes: { type: String },
  },
  { collection: 'Shipping' }
);

const ShippingsModel = mongoose.model('Shipping', ShippingSchema);

ShippingsModel.getAll = () => {
  return ShippingsModel.find({});
};

ShippingsModel.addShipping = (shippingToAdd) => {
  return shippingToAdd.save();
};

export default ShippingsModel;
