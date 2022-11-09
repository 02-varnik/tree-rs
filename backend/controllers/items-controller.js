//extracting the item modal
const req = require("express/lib/request");
const Item = require("../models/items");

const addItem = async (req, res, next) => {
  const { username,userId, email,location, phonenum, itemType, rate, quantity } =
    req.body;

  const newItem = new Item({
    username,
    userId,
    email,
    phonenum,
    itemType,
    rate,
    quantity,
    location
  });

  try {
    await newItem.save();
    console.log("Item added");

    console.log(newItem);

    res.status(200).json({ message: "Added item" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    return;
  }
};

const fetchItem = async  (req,res,next)=>{
  const userId = req.params.uid;
  console.log(userId);

  let items;
  try {
    items = await Item.find({ userId: userId });
    console.log(items);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    return;
  }

  if (!items) {
    console.log("No item found with this id");
    res.status(400).json({ error: "No item found with this id" });
    return;
  }

  console.log("item with this id found");
  console.log(items);
  res.status(200).json({ items: items });
  return;
}

exports.addItem = addItem;
exports.fetchItem= fetchItem;