const mongoose = require('mongoose');
const {Schema} = mongoose;
const ItemSchema = new Schema({
    itype: {
        type: String,
        required: true
    },
    iname: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    brandname: {
        type: String,
        required: true
    }  
})

module.exports = mongoose.model('item', ItemSchema);