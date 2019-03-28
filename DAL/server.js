const http = require('http');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const router = require('./router.js');

const server = http.createServer(router);

server.listen(port);

console.log(`server running on ${port}`);

module.exports = {
  server: server
};
