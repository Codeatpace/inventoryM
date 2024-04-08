const express = require('express');
const router = express.Router()
const Item = require('../models/Item')

router.post('/delItems', async(req, res) => {
    try {
        let iname = req.body.iname
        if(!iname){
            return res.status(400).json({error: 'ItemName Require'})

        }
        const result = await Item.deleteMany({ iname: iname});
        console.log(result);
        res.status(200).json({success: true, message: 'Deleted successfully' });

    } catch (error) {
        res.send("Server Error", error.message)
    }
}) 


module.exports = router;