const Shop = require('../models/shop.model')

module.exports.list = (req, res, next) => {
  Shop.find()
    .then((shops) => res.json(shops))
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Shop.findById(req.params.shopId)
    .then((shop) => res.json(shop))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  Shop.create(req.body)
    .then((body) => res.status(201).json(body))
    .catch(next)
}

module.exports.update = (req, res, next) => {
  //Future example: const { name } = req.body
  //const objetoAlVuelo = { name, location, etc... }
  Object.assign(req.shop, req.body);
  req.shop.save()
    .then((shopUpdated) => res.json(shopUpdated))
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  console.log('Succesfully deleted');
  Shop.findByIdAndDelete(req.params.shopId)
    .then(() => res.status(204).send())
    .catch(next);
}
