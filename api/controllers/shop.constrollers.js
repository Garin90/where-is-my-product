const Shop = require('../models/shop.model')

module.exports.list = (req, res, next) => {
  Shop.find()
    .then((shops) => res.json(shops))
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Shop.findById(req.params.id)
    .then((shop) => res.json(shop))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  Shop.create(req.body)
    .then((body) => res.json(body))
    .catch(next)
}

module.exports.update = (req, res, next) => {
  Shop.findByIdAndUpdate(req.params.id, req.body)
    .then((shopUpdated) => res.json(shopUpdated))
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Shop.findByIdAndDelete(req.params.id)
    .then((shopDeleted) => console.log(`Shop deleted: ${shopDeleted}`))
}
