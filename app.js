const http = require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    console.log('anand naik')
});

server.listen(4000);