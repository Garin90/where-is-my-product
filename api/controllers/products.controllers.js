const Product = require('../models/product.model');

module.exports.list = (req, res, next) => {
  Product.find()
    .then((products) => res.json(products))
    .catch(next);
}

module.exports.detail = (req, res, next) => {
  Product.findById(req.params.productId)
    .then((product) => res.json(product))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Object.assign(req.product, req.body);
  req.product.save()
    .then((productUpdated) => res.json(productUpdated))
    .catch(next);
}

module.exports.delete = (req, res, next) => {
  console.log('holi')
  Product.findByIdAndDelete(req.params.productId)
    .then(() => res.status(204).send())
    .catch(next);
}