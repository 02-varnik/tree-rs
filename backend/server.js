//extracting express module
const express = require("express");
const app = express();
const port = 5000;

//extracting routers
const userRouters = require("./routers/user-routers");
const itemRouters = require("./routers/items-routers");


// for parsering json file
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//allowing excess to public folder
app.use(express.static("public"));

//connecting to the databse server
const mongoose = require("mongoose");
const dbName = "tree-rs";
mongoose
  .connect(
    `mongodb+srv://kitashi14:kitashi02@cluster0.rhccnpx.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database\n");
  });

//adding a middleware for setting headers in api requests for allowing its execution to from another server when using browsers
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

	next();
});

//setting api
app.use("/api/user", userRouters);
app.use("/api/item", itemRouters);

//setting the server port
app.listen(port, () => console.log(`Server listening on port ${port}`));
