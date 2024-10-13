// backend/routes/index.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const genaiController = require('../controllers/genaiController');

router.post('/payments', paymentController.processPayment);
router.post('/genai/message', genaiController.generateMessage);

module.exports = router;
