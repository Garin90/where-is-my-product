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
},{timestamps: true})

//virtual populate of product would go here

const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;