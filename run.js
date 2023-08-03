const http = require('http');
const routes=require('./run.js');
console.log(routes.someText,':',routes.text);
const server = http.createServer(routes.handler,routes.someText);
server.listen(4000);
