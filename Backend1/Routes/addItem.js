const express = require('express');
const router = express.Router();
const item = require('../models/Item'); // Assuming Item is a Mongoose model

router.post('/additem', async (req, res) => {
  try {
    await item.create({
      itype: req.body.itype,
      iname: req.body.iname,
      quantity: req.body.quantity,
      brandname: req.body.brandname,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error); // Log the complete error for debugging
    res.status(500).json({ success: false, error: error.message || "An error occurred" }); // Provide a more specific error message
  }
});

module.exports = router;
