// backend/controllers/paymentController.js
const paymentService = require('../services/paymentService');

exports.processPayment = async (req, res) => {
  try {
    const paymentResult = await paymentService.processPayment(req.body);
    res.status(200).json(paymentResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
