const mongoose = require("mongoose");
const menuitemschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default:false,
  },
  ingredients: {
    type: [String],
    default:[],
  },
  numberofsales: {
    type: String,
    default:0,
  }
});
const Menuitem = mongoose.model("Menuitem", menuitemschema);
module.exports = Menuitem;

