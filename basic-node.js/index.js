const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("index.html");
const style = fs.readFileSync("index.css");
// console.log(style);
var server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/index.css":
      response.writeHead(200, { "Content-Type": "text/css" });
      response.end(style);
      break;
    default:
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(home);
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// data = document.getElementById("inputdata").value;
// console.log(data); let data = fs.writeFileSync("data.txt", data);
