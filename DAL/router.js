const fs = require('fs');
const path = require('path');

var url = require('url');
const handlers = require('./handlers');


const router = (request, response) => {

  let path = url.parse(request.url).pathname;
  // path = '/restaurants/value'
  path = path.indexOf("restaurants") !== -1 ? '/restaurants' : path;
  path = path.indexOf("hotels") !== -1 ? '/hotels' : path;
  path = path.indexOf("otherStuff") !== -1 ? '/otherStuff' : path;
  switch (path) {

    case '/':
      handlers.handleHome(request, response);
      break;
    case '/domMe':
      handlers.handleDom(request, response);
      break;
    case '/favicon.ico':
      handlers.handleFavicon(request, response);
      break;
    case '/style.css':
      handlers.handleStyle(request, response);
      break;
    case '/bg.jpg':
      handlers.handleBG(request, response);
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
