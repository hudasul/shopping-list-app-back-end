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


async function showAllItems(req, res) {
    try{
        const allItems = await Item.find()
        if (allItems.length){
            res.status(200).json(allItems)
        } else {
            res.sendStatus(204)
        }

    }catch (err){
        console.log(err)
    }
}

async function showItem(req,res) {

    try{
        const item = await Item.findById(req.params.id)
        if (item){
            res.status(200).json(item)
        } else {
            res.sendStatus(404)
        }
    }catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function deleteItem(req,res) {
    try{
        const deletedItem = await Item.findByIdAndDelete(req.params.id)
        if (deletedItem){
            res.status(200).json(deletedItem)
        } else {
            res.sendStatus(404)
        }
    }catch (err){
        res.status(500).json({error: err.message})
    }
    
}



module.exports = {
    createItem,
    showAllItems,
    showItem,
    deleteItem
}