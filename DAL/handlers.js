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


const handleIndexJs = (request, response) => {
  fs.readFile(__dirname + "/../BL/index.js", function(error, file) {
    if (error) {
      response.writeHead(500)
      response.end("500 csafoasfg")
    } else {
      response.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      response.end(file);
    }
  })
}

const handleRestorant = (request, response) => {
  fs.readFile(__dirname + "/../DB/restList.json", function(error, file) {
    if (error) {
      response.writeHead(500)
      response.end("500 csafoasfg")
    } else {
      response.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      response.end(file);
    }
  })
}
const handleHotels = (request, response) => {
  fs.readFile(__dirname + "", function(error, file) {
    if (error) {
      response.writeHead(500)
      response.end("500 csafoasfg")
    } else {
      response.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      response.end(file);
    }
  })
}

const handleOtherThings = (request, response) => {
  fs.readFile(__dirname + "", function(error, file) {
    if (error) {
      response.writeHead(500)
      response.end("500 csafoasfg")
    } else {
      response.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      response.end(file);
    }
  })
}
module.exports = {
  handleHome,
  handleStyle,
  handleIndexJs,
  handleRestorant,
  handleHotels,
  handleOtherThings
}
