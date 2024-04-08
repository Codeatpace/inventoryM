const express = require('express');
const router = express.Router()
const Item = require('../models/Item')

router.put('/upItem/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { iname, itype, quantity, brandname } = req.body;
      const updatedItem = await Item.findByIdAndUpdate(
        id,
        { iname, itype, quantity, brandname },
        { new: true }
      );
      res.status(200).json({success:true, updatedItem})
  
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      // res.json(updatedRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error', message: error.message });
    }
  });
  

module.exports = router;