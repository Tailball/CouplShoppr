const express = require('express');
const router = express.Router();

const controller = require('../controllers/shoppingListController');


router.get('/', controller.getShoppingList);
router.get('/:id', controller.getShoppingListItem);
router.post('/check/:id', controller.checkShoppingListItem);
router.post('/add', controller.addItemToShoppingList);
router.post('/delete/:id', controller.removeItemFromShoppingList);
router.post('/clear', controller.clearShoppingList);


module.exports = router;