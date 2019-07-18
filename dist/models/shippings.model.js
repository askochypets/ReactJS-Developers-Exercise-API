'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShippingSchema = _mongoose2.default.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  notes: { type: String }
}, { collection: 'Shipping' });

var ShippingsModel = _mongoose2.default.model('Shipping', ShippingSchema);

ShippingsModel.getAll = function () {
  return ShippingsModel.find({});
};

ShippingsModel.addShipping = function (shippingToAdd) {
  return shippingToAdd.save();
};

ShippingsModel.deleteAll = function () {
  return ShippingsModel.remove({});
};

exports.default = ShippingsModel;