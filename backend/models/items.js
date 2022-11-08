//extracting mongoose module
const mongoose = require("mongoose");

//Schema for items
const itemSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
    unique: true,
    maxlength: 25,
  },
  userId:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    unique: true,
  },
  phonenum: {
    type: Number,
    required: true,
  },
  userType: {
    type: String,
    required: [true, "Please enter type of user"],
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
    required: true
  }

});

//exporting item modal
module.exports = mongoose.model("item", itemSchema);
