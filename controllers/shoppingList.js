const shoppingList = require('../models/shoppingList')
// to create the list
async function createList(req,res){
    try {
        console.log('now showing', req.body)
        const newList = await shoppingList.create(req.body)
        res.status.json(createList)
    } catch (error) {
        console.log(error)
    }
}
// to show the list made by the user
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
// to show us all the shopping lists made by users - delete if not needed
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
        res.status(deleted)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports ={
    createList,
    showList,
    showAllLists,
    updateList,
    deleteList
}