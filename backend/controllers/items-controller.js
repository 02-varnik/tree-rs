//extracting the item modal
const req = require("express/lib/request");
const Item = require("../models/items");

const addItem = async (req, res, next) => {
  const { username,userId, email, phonenum, userType, itemType, rate, quantity } =
    req.body;

  const newItem = new Item({
    username,
    userId,
    email,
    phonenum,
    userType,
    itemType,
    rate,
    quantity,
  });

  try {
    await newItem.save();
    console.log("Item added");

    console.log(newItem);

    res.status(200).json({ message: "Added your item request" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

const fetchItem = async  (req,res,next)=>{
  const userId = req.params.uid;
  console.log(userId);

  let items;
  try {
    items = await Item.findAll({ userId: userId });
    console.log(items);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  if (!items) {
    console.log("No item found with this id");
    res.status(401).json({ error: "No item found with this id" });
  }

  console.log("item with this id found");
  console.log(item);
  res.status(201).json({ item: items });
}

exports.addItem = addItem;
exports.fetchItem= fetchItem;