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
    uom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
    createdOn: {
        type: Date,
        required: true
    }
});


const shoppinglistItem = mongoose.model('shoppinglistItem', shoppinglistItemSchema);
module.exports = shoppinglistItem;