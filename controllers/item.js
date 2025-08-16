const Item = require('../models/item')

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

async function updateItem(req, res) {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (updatedItem) {
      res.status(200).json(updatedItem)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
    
    showItem,
    deleteItem,
    updateItem
    
}