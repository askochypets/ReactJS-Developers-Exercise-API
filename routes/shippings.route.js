import express from 'express';
import axios from 'axios';
import shippingController from '../controllers/shippings.controller';
import config from '../config/config.dev';

const router = express.Router();

router.get('/shipping', (req, res) => {
  shippingController.getAll(req, res);
});

router.post('/shipping', async (req, res) => {
  try {
    const { data } = await axios.get(config.YAddress_BASE_URL, {
      params: {
        AddressLine1: req.body.address,
        AddressLine2: req.body.city,
        UserKey: '',
      },
    });
    if (!data.ErrorCode) {
      shippingController.addShipping(req, res);
    } else {
      res.send(data.ErrorMessage);
    }
  } catch (error) {
    console.error(error);
  }
});

router.delete('/shipping', (req, res) => {
  shippingController.deleteAllShippings(req, res);
});

export default router;
