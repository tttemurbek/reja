console.log("I am just checking whether it is working or not");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDb call
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session codes

// 3: view codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing codes
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
