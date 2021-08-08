const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:25017/dhan", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Database not Connected");
  });

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
