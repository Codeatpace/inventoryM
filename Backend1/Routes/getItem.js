const express = require('express');
const router = express.Router();
const item = require('../models/Item'); // Assuming Item is a Mongoose model

router.get('/getitem', async (req, res) => {
    try {
        let allItems = await item.find({})
         res.send(allItems)
     } catch (error) {
         res.send("Server Error", error.message)
     }
});
router.get('/count', async(req, res) => {
    const count = await item.countDocuments();
    res.json(count)
})
router.get('/item/:id', async(req, res) => {
    let id = req.params.id
    try{ 
        let val = await item.findById(id)
        if(val){
            res.json(val)
        }
        else{
            res.status(400).json({message:"Item not found"})
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;
