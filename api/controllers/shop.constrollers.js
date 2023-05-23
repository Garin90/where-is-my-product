const Shop = require('../models/shop.model')

module.exports.list = (req, res, next) => {
  Shop.find()
    .then((shops) => res.json(shops))
    .catch(next)
}

module.exports.detail = (req, res, next) = {
  Shop.findById(req.params.id)
    .then((shop) => res.json(shop))
    .catch(next)
}
