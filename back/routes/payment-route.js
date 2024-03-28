const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment-controller');

router.post('/payment', paymentController.createPayment);
router.get('/payment', paymentController.getAllPayments);
router.get('/payment/:id', paymentController.getPaymentById);
router.put('/payment/:id', paymentController.updatePaymentById);
router.delete('/payment/:id', paymentController.deletePaymentById);

module.exports = router;
