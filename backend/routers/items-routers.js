//extracting router method from express module
const express = require("express");
const router = express.Router();

//extracting item-model router functions
const itemController = require("../controllers/items-controller");

//setting rest APIs
router.post("/addItem", itemController.addItem);
router.get("/:uid", itemController.fetchItem);

module.exports = router;
