const shoppingListItem = require('../persistence/models/shoppinglistItem');


const getShoppingList = (req, res) => {

    shoppingListItem.find({})

        .then(list => {
            res.json({ 
                data: list,
                success: true 
            });
        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}


const getShoppingListItem = (req, res) => {
    shoppingListItem.findById(req.params.id)

        .then(foundItem => {
            if(foundItem) {
                res.json({
                    success: true,
                    data: foundItem
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    reason: 'Item not found'
                });
            }
        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}


const checkShoppingListItem = (req, res) => {
    shoppingListItem.findById(req.params.id)

        .then(foundItem => {
            if(foundItem) {

                foundItem.checked = !foundItem.checked;
                foundItem.save()

                    .then(savedItem => {
                        res.json({
                            success: true,
                            data: savedItem
                        });
                    })

                    .catch(err => {
                        res.status(500).json({
                            success: false,
                            reason: err
                        });
                    })

            }

            else {
                return res.status(404).json({
                    success: false,
                    reason: 'Item not found'
                });
            }
        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}   


const addItemToShoppingList = (req, res) => {
    const newItem = {
        ...req.body,
        createdOn: new Date(),
        checked: false,
    };

    const newShoppingListItem = new shoppingListItem(newItem);
    newShoppingListItem.save()

        .then(savedItem => {
            res.json({
                success: true,
                data: savedItem
            });
        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}


const removeItemFromShoppingList = (req, res) => {

    shoppingListItem.findById(req.params.id)

        .then(foundItem => {

            if(foundItem) {

                foundItem.remove()
                    
                    .then(removeResult => {
                        res.json({
                            success: true,
                            data: removeResult
                        });
                    })

                    .catch(err => {
                        res.status(500).json({
                            success: false,
                            reason: err
                        });
                    });

            }

            else {
                res.status(404).json({
                    success: false,
                    reason: 'Item not found'
                });
            }

        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}


const clearShoppingList = (req, res) => {
    shoppingListItem.deleteMany({})

        .then(deleteResult => {
            res.json({
                success: true,
                data: { 
                    deletedCount: deleteResult.deletedCount 
                }
            });
        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}


const updateShoppingListItem = (req, res) => {
    shoppingListItem.findById(req.body._id)
        
        .then(foundResult => {

            if(foundResult) {
                foundResult.updateOne(req.body)
                    
                    .then(updateResult => {
                        res.json({
                            success: true,
                            result: updateResult
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            success: false,
                            reason: err
                        });
                    })
            }

            else {
                return res.status(404).json({
                    success: false,
                    reason: 'resource not found'
                });
            }

        })

        .catch(err => {
            res.status(500).json({
                success: false,
                reason: err
            });
        });
}


module.exports = {
    getShoppingList,
    getShoppingListItem,
    checkShoppingListItem,
    addItemToShoppingList,
    removeItemFromShoppingList,
    clearShoppingList,
    updateShoppingListItem
};