const {Schema, model} = require('mongoose')
const mongoose = require("mongoose")

const shoppingListSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
      }
})

const shoppingList = model('shoppingList', shoppingListSchema)

module.exports = shoppingList