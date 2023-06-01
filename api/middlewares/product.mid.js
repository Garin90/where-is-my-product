const Product = require('../models/product.model')

module.exports.exists = (req, res, next) => {
  Product.findById(req.params.productId)
    .then((product) => {
      
      if (product) { 
        req.product = product;
        console.log(req.product)
        next();
      } else {
        next();
      }
    })
    .catch(() => {
      console.log('holi');
      next();
    });
}