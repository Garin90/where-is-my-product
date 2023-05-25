const express = require('express');
const router = express.Router();

const shopsControllers = require('../controllers/shops.constrollers')

const shopsMid = require('../middlewares/shop.mid')

router.get('/shops', shopsControllers.list) //I'm not sure if it's necessary. I will use for testing firstly
router.get('/shops/:shopId', shopsMid.exists, shopsControllers.detail)
router.post('/shops', shopsControllers.create)
router.put('/shops/:shopId', shopsMid.exists, shopsControllers.update) //It will be a Patch in the future. Now, a put verb is well for testing.
router.delete('/shops/:shopId', shopsMid.exists, shopsControllers.delete)

// router.get('/products', productsControllers.list)
// router.get('/products/:id', productsController.detail)
// router.post('/products', productsController.create)
// router.patch('/products/:id', productsController.update)
// router.delete('/products/:id', productsController.delete)

module.exports = router;