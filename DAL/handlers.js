const fs = require('fs')
const path = require('path')
const filter=require("../BL/filter")
const jsonfile=require("../DB/restList")

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
let arr=jsonfile;
let word="Man";
let filtered =
filter.findWords(arr,word)
response.writeHead(200,{
  "content-type":"text/html"

});
filtered=JSON.stringify(filtered)
response.end(filtered)



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
