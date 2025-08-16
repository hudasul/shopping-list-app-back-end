const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item')

router.get('/:id', itemController.showItem) 
router.delete('/:id', itemController.deleteItem) 
router.put('/:id', itemController.updateItem) 

module.exports = router