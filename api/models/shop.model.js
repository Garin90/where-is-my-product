const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 20
  },
  //to be updated with google maps location
  location: {
    type: String,
    required: true,
  },
  //populate of product goes here
},{timestamps: true})

const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;