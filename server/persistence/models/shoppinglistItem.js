const mongoose = require('mongoose');


const shoppinglistItemSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String,
        required: false
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    }
});


const shoppinglistItem = mongoose.model('shoppinglistItem', shoppinglistItemSchema);
module.exports = shoppinglistItem;