const express = require("express");
const mongoose = require("mongoose");
const Ids = require("./models/idGenerator");
const app = express();

mongoose.connect("mongodb://localhost/nameIds", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const ids = await Ids.find();
  res.render("index", { ids: ids });
});

app.post("/ids", async (req, res) => {
  await Ids.create({ fullName: req.body.fullUrl });

  res.redirect("/");
});

app.listen(process.env.PORT || 5000);
