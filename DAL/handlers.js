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


const handlePublic = (request, response) => {
  const url = request.url;
  const extension = url.split('.')[1]
  const exType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  }

  let filePath = path.join(__dirname, "..", url)
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, {
        'content-type': 'text/html'
      })
      response.end("<h1>SERVER ERROR : 500</h1>")
    } else {
      response.writeHead(200, {
        'content-type': exType[extension]
      })
      response.end(file)
    }
  });

}

module.exports = {
  handleHome,
  handleStyle
}
