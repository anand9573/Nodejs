const http = require('http');
const { text } = require('stream/consumers');

const server = http.createServer((request, response) => {
console.log(request.url,request.method,request.headers)
response.setHeader('Content-Type','text')
if(request.url==='/home'){
    response.write('Welcome home')
}else if(request.url==='/about'){
    response.write('Welcome to About Us page')
}else if(request.url==='/node'){
    response.write('Welcome to my Nodejs Project')
}
response.end();
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});