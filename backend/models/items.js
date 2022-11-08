//extracting mongoose module
const mongoose = require("mongoose");

//Schema for items
const itemSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
    maxlength: 25,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
  },
  phonenum: {
    type: Number,
    required: true,
  },
  itemType: {
    type: String,
    required: [true, "Please enter type of user"],
  },
  rate: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

//exporting item modal
module.exports = mongoose.model("item", itemSchema);
