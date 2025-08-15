const shoppingList = require('../models/shoppingList')
const Item = require('../models/item')


async function createList(req, res) {
  try {
    const createdList = await shoppingList.create(req.body)
    res.status(201).json(createdList)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function showList(req,res){
     try {
    const list = await shoppingList.findById(req.params.id)
    if (list) {
      res.status(200).json(list)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function showAllLists (req,res){
    try {
        const allLists =  await shoppingList.find()
        if (allLists.length) {
            res.status(200).json(allLists)
        } else {
            res.status(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

async function updateList (req,res){
    try {
        const list = await shoppingList.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

async function deleteList (req,res){
    try {
        const deletedList = await shoppingList.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedList)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function addItemToList(req, res) {
  try {
    const { id } = req.params
    const { name, price, quantity } = req.body

    const newItem = await Item.create({ name, price, quantity, listId: id })

    res.status(201).json(newItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getItemsForList(req, res) {
  try {
    const { id } = req.params
    const items = await Item.find({ listId: id })

    if (items.length) {
      res.status(200).json(items)
    } else {
      res.sendStatus(204)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports ={
    createList,
    showList,
    showAllLists,
    updateList,
    deleteList,
  addItemToList,
  getItemsForList
}