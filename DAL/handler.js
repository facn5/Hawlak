const fs = require('fs');
const path = require('path');
// const rest=require('/../DB/restList.js')
const handler = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    let filePath = path.join(__dirname, "../UI/index.html")
    const HtmlFile = fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500);
        response.end("500 error");
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.end(file);
      };
    })
  } else if (endpoint === '/style.css') {
    fs.readFile(__dirname + "/../UI/style.css", function(error, file) {
      if (error) {
        response.writeHead(500)
        response.end("500 csafoasfg")
      } else {
        response.writeHead(200, {
          "Content-Type": "text/css"
        });response.end(file);
      }
    })
  }
}




module.exports = handler;
