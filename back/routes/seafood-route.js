const express = require('express');
const router = express.Router();
const seafoodController = require('../controllers/seafood-controller');

router.post('/seafood', seafoodController.createSeafood);
router.get('/seafood', seafoodController.getAllSeafood);
router.get('/seafood/:id', seafoodController.getSeafoodById);
router.put('/seafood/:id', seafoodController.updateSeafoodById);
router.delete('/seafood/:id', seafoodController.deleteSeafoodById);

module.exports = router;
