const express = require("express");
const mongoose = require("mongoose");
const dataModel = require("./dataSchema");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 2000;

app.listen(port, console.log(`server running on port ${port}`));

mongoose
  .connect(
    "HERE WE WILL PASTE THE CONNECTION LINK FROM MONGO ATLAS"
  )
  .then(() => {
    console.log("data base connected");
  })
  .catch((err) => console.log(err, "data base not connected err"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const clintData = new dataModel({
    name: req.body.name,
    email: req.body.email,
  });
  clintData.save();

  //HERE WE DO TWO THINGS
  //HERE WE WILL CHECK TWO CODDITIONS IF THE DATA SENT OR NOT BY WRITING SOME LOGICAL JAVASCRIPT
});
