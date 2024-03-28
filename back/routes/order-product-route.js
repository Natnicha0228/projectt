const express = require('express');
const router = express.Router();
const orderProductController = require('../controllers/order-product-controller');

router.post('/order-product', orderProductController.createOrderProduct);
router.get('/order-product', orderProductController.getAllOrderProducts);
router.get('/order-product/:id', orderProductController.getOrderProductById);
router.put('/order-product/:id', orderProductController.updateOrderProductById);
router.delete('/order-product/:id', orderProductController.deleteOrderProductById);

module.exports = router;
