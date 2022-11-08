//extracting the item modal
const req = require("express/lib/request");
const Item = require("../models/items");

const addItem = async (req, res, next) => {
  const { username, email, phonenum, userType, itemType, rate, quantity } =
    req.body;

  const newItem = new Item({
    username,
    email,
    phonenum,
    userType,
    itemType,
    rate,
    quantity,
  });

  try {
    await newItem.save();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  console.log("Item added");

  console.log(newItem);

  res.status(200).json({ message: "Added your item request" });
};


exports.addItem = addItem;