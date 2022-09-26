const http = require('http');
const os = require('os');
console.log('Kubia server starting...');

var count = 0;
var handler = function (request, response) {
  count++;
  console.log('Received request from ' + request.connection.remoteAddress);
  if (count % 5 == 0) {
    response.writeHead(500);
    response.end('bye');
  } else {
    response.writeHead(200);
    response.end("You've hit " + os.hostname() + '\n');
  }
};
var www = http.createServer(handler);
www.listen(8080);
