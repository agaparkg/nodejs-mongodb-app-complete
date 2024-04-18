const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // required: [true, "Product name is required"]
    },
    quantity: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
// {
//     name: "Alex",
//     age: 23
// }

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
