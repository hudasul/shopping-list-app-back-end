const { Schema, model } = require('mongoose')
const mongoose = require("mongoose")

const itemSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  price: {
    type: Number,
    required: true,
  }, 
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shoppingList' 
  }
})

const Item = model('Item', itemSchema)

module.exports = Item
