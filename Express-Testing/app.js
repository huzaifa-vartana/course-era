const express = require("express");
const fs = require("fs");
const home = fs.readFileSync("index.html");
const style = fs.readFileSync("index.css");
const app = express();
const port = 8088;
app.use(express.static('public'));

app.get("/", function print(req, res) {
  res.end(home);
  //   res.send(home);
});
app.get("/us", function print(req, res) {
  res.send("Contact Us");
});
app.get("/about", function print(req, res) {
  res.send("About Us");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
