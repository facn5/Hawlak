const fs = require('fs');
const path = require('path');

var url = require('url');
const handlers = require('./handlers');


const router = (request, response) => {

  let path = url.parse(request.url).pathname;

  switch (path) {

    case '/':
      handlers.handleHome(request, response);
      break;
    case '/style.css':
      handlers.handleStyle(request, response);
      break;
    case '/BL/index.js':
      handlers.handleIndexJs(request, response);
      break;
    case '/restaurants':
      handlers.handleRestorant(request, response);
      break;
    case '/hotels':
      handlers.handleRestorant(request, response);
      break;
    case '/otherStuff':
      handlers.handleOtherThings(request, response);
      break;
    default:
      response.writeHead(404);
      response.end("Not found");
      break;
  }
}

module.exports = router;
