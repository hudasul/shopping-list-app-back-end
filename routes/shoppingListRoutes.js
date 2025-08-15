const express = require('express')
const router = express.Router()
const shoppingListController = require('../controllers/shoppingList')

router.post('/new', shoppingListController.createList)
router.get('/', shoppingListController.showAllLists)
router.get('/:id', shoppingListController.showList)
router.put('/:id', shoppingListController.updateList)
router.delete('/:id', shoppingListController.deleteList)
router.post('/:id/item', shoppingListController.addItemToList)
router.get('/:id/item', shoppingListController.getItemsForList)

module.exports = router