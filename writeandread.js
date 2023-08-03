const http = require('http');
const fs=require('fs')
const { text, buffer } = require('stream/consumers');

const server = http.createServer((request, response) => {
    const url=request.url;
    const method=request.method;
    if(url==='/'){
        fs.readFile('message.txt',{encoding: 'utf-8'},(err,data)=>{
            if(err){
                console.log(err)
            }
            console.log('data from file :'+data)
            response.write('<html>')
            response.write('<head><title>Enter Message</title></head>')
            response.write(`<body>${data}</body>`)
            response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
            response.write('</html>')
            return response.end(); //after end it will send data to client
        });
}
else if(url==='/message' && method==='POST'){
    const body=[];
    request.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk);
    })
    return request.on('end',()=>{
        const parsebody=Buffer.concat(body).toString();
        console.log('parsebody :',parsebody)
        const message=parsebody.split('=')[1];
        fs.writeFile('message.txt',message,(err)=>{
            if(err){
                console.log(err)
            }
            console.log(`indise fs.writefile`);
            response.statusCode=302;
            response.setHeader('Location','/');
            return response.end();
        })
    })
}else{

    response.setHeader('Content-Type','text/html');
    response.write('<html>')
    response.write('<head><title>My first page</title></head>')
    response.write('<body><h1>Hello from my node.js server!</h1></body>')
    response.write('</html>')
    response.end();
}
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});