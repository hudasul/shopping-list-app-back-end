const {Schema, model} = require('mongoose')

const shoppingListSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    listItems:[{
        type: Mongoose.Schema.Types.ObjectId, 
        ref: "Item"

    }]

})

const shoppingList = model('shoppingList', shoppingListSchema)

module.exports = shoppingList