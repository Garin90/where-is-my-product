const express = require('express');
const router = express.Router();

router.get('/shops', shopsControllers.list) //I'm not sure if it's necessary. I will use for testing firstly
router.get('/shops/:id', shopsController.detail)
router.post('/shops', shopsController.create)
router.patch('/shops/:id', shopsController.update) //I'm not sure if it's patch that I need for shops updating
router.delete('/shops/:id', shopsController.delete)

// router.get('/products', productsControllers.list)
// router.get('/products/:id', productsController.detail)
// router.post('/products', productsController.create)
// router.patch('/products/:id', productsController.update)
// router.delete('/products/:id', productsController.delete)