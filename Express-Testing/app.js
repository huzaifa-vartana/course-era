const express = require("express");
const fs = require("fs");
const os = require("os");
var bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: true });
const pug = require("pug");
const path = require("path");
const app = express();
const port = 8088;
let sdata = "";
app.set("view engine", "pug");
app.set("/views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
app.get("/", function print(req, res) {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/us", function print(req, res) {
  res.render("index", { title: "About Us", message: "Contact Us" });
});
app.get("/about", function print(req, res) {
  res.send("About Us");
});
app.post("/savedata", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  // response = {
  //   first_name: req.body.name
  // };

  sdata = req.body.name;
  console.log(sdata);
  // let written=fs.writeFileSync("savedata.txt",sdata);
  fs.appendFileSync("savedata.txt", sdata + os.EOL);
  // fs.appendFileSync("savedata.txt","\n");
  res.render("index", {
    title: "Saved data",
    message: `Data Saved: \t${sdata}`,
  });
  // res.end("Written");
  // console.log(response);
  // res.end(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

// app.get("/demo",function print(req,res) {
//   res.render('index',{title:"Hey",message:"Good Morning"})

// });
