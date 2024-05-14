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
app.get("/hello", function (req, res) {
  res.end("<h1>Asetullaev Temurbek Tolybekovich</h1>");
});

app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovgalar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
  