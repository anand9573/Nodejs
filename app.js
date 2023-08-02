// const http = require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req);
//     console.log('anand naik')
//     process.exit();
// });

// server.listen(4000);
const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Anand Naik');
  response.end();
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});