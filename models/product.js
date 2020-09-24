const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
      name: { type: String, required: true },
      price: { type: String, required: true },
      imgURLOne: { type: String, required: true },
      imgURLTwo: { type: String, required: true },
      imgURLThree: { type: String, required: true },
      description: { type: String, required: true },
      detail: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)