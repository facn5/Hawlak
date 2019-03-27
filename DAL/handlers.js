const fs = require('fs')
const path = require('path')

const handleHome = (request, response) => {
  let filePath = path.join(__dirname, "..", "UI", "index.html")
  fs.readFile(
    filePath,
    (error, file) => {
      if (error) {
        response.writeHead(500)
        response.end("500 error")
      } else {
        response.writeHead(200, {
          "content-type": "text/html"
        })
        response.end(file)
      }
    }
  )
}

const handleStyle = (request, response) => {
  fs.readFile(__dirname + "/../UI/style.css", function(error, file) {
    if (error) {
      response.writeHead(500)
      response.end("500 csafoasfg")
    } else {
      response.writeHead(200, {
        "Content-Type": "text/css"
      });
      response.end(file);
    }
  })
}



module.exports = {
  handleHome,
  handleStyle
}
