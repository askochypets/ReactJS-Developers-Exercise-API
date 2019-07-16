import Shipping from '../models/shippings.model';

export default {
  getAll: async (req, res) => {
    try {
      const shippings = await Shipping.getAll();
      console.info('sending all shippings...');
      res.send(shippings);
    } catch (err) {
      console.error(`Error in getting shippings- ${err}`);
      res.send('Got error in getAll');
    }
  },

  addShipping: async (req, res) => {
    const shippingToAdd = Shipping({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      email: req.body.email,
      phone: req.body.phone,
      notes: req.body.notes,
    });
    try {
      const result = await Shipping.addShipping(shippingToAdd);
      console.info('Adding shipping...');
      res.send(`added: ${result}`);
    } catch (err) {
      console.error(`Error in getting shippings- ${err}`);
      res.send('Got error in addShipping');
    }
  },
};
