const http = require('http');

var port = process.env.PORT || 8000;
const router = require('./router.js');

const server = http.createServer(router);


server.listen(port, () => {
  console.log('server running on port ' + port);
});
