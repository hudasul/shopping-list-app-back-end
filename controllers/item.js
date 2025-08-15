const Item = require('../models/item')

async function createItem (req,res){
    try{
        const createdItem = await Item.create(req.body)
        res.status(201).json(createdItem)

    }catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }

}



module.exports = {
    createItem
}