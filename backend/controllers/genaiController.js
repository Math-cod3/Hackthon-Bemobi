const genaiService = require('../services/genaiService');

exports.generateMessage = async (req, res) => {
  try {
    const message = await genaiService.generateMessage(req.body.input);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};