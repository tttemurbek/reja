console.log("I am just checking whether it is working or not");
const express = require("express");
const app = express();
const http = require("http");

// 1: kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session codes

// 3: view codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4: rooting codes
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
