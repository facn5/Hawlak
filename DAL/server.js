const http = require('http');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const handler = require('./handler.js')

const server = http.createServer(handler);






server.listen(port);

console.log('server running on port 4000');

module.exports = { server: server};
