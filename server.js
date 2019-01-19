const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


//creational design patter or factory desing pattern
const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Michael Adaikalaraj\n300958145\n');
});

server.listen(port, hostname, () => {
    //template string `
    console.log(`Server running at http://${hostname}:${port}/`);
});