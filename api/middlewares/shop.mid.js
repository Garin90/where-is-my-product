const Shop = require('../models/shop.model');

module.exports.exists = (req, res, next) => {
  Shop.findById(req.params.shopId)
    .then((shop) => {
      if (shop) {
        req.shop = shop;
        next();
      } else {
        next();
      }
    })
    .catch(next);
}