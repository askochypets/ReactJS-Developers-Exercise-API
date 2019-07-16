import express from 'express';
import shippingController from '../controllers/shippings.controller';

const router = express.Router();

router.get('/shipping', (req, res) => {
  shippingController.getAll(req, res);
});

router.post('/shipping', (req, res) => {
  shippingController.addShipping(req, res);
});

export default router;
