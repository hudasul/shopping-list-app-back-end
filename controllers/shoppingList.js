const shoppingList = require('../models/shoppingList')

async function createList(req,res){
    try {
        console.log('now showing', req.body)
        const newList = await shoppingList.create(req.body)
        res.status.json(createList)
    } catch (error) {
        console.log(error)
    }
}

async function showList(req,res){
    try {
        const list = await shoppingList.findById(req.params.id)
        if(list){
            res.status.json(200)(list)
        } else {
            res.sendStatus(404)
        }
        
    } catch (error) {
        res.status(500).json({error: error.message})
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