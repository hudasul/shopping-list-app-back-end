const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item')

router.post('/new', itemController.createItem)
router.get('/', itemController.showAllItems)
router.get('/:id', itemController.showItem) 
router.delete('/:id', itemController.deleteItem) 

module.exports = router