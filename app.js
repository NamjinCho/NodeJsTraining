const http = require('http');
const hostname='127.0.0.1';
const port = 80;

const server =  http.createServer((req,res) => {

  res.writeHead(200, {'Content-type' : 'text/plane'});
  res.end('Hello World\n');
});

server.listen(port,hostname, () => {

  console.log('on')
})
