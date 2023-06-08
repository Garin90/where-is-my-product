const session = require ('exress-session');
const MongoStore = require ('connect-mongo');
const Shop = require('../models/shop.model');
const MONGODB_URI = process.env.MONGODB_URI;

module.exports.session = session ({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.SESSION_SECURE === 'true'
  },
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    ttl: 7*24*60*60 // = 7 days
  })
});

module.exports.loadSessionShop = (req, res, next) => {
  const {shopId} = req.session
    if(shopId) {
      Shop.findById(shopId)
      .then((shop) => {
        req.shop = shop;
        next();
      })
      .catch(next)
    } else {
      next();
    }
}