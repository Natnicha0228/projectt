const express = require('express');
const router = express.Router();
const shippingAddressController = require('../controllers/shipping-address-controller');

router.post('/shipping-address', shippingAddressController.createShippingAddress);
router.get('/shipping-address', shippingAddressController.getAllShippingAddresses);
router.get('/shipping-address/:id', shippingAddressController.getShippingAddressById);
router.put('/shipping-address/:id', shippingAddressController.updateShippingAddressById);
router.delete('/shipping-address/:id', shippingAddressController.deleteShippingAddressById);

module.exports = router;
