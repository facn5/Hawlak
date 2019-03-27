const http = require('http');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const handler = require('./handler.js')

const server = http.createServer(handler);

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});

module.exports = {
  server: server
};
