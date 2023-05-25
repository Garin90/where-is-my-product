const shop = require('../models/shop.model');

module.exports.exists = (req, res, next) => {
  shop.findById(req.params.shopId)
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