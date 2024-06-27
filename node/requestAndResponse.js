const http = require('http');

const server = http.createServer((req, res) => {
    console.log('====> req (request)');
    console.log(req.url);
    //console.log(req.method);
    //console.log(req.headers);

    res.setHeader('content-type','app/json');
    console.log(res.getHeaders());

    res.end('Hello World');

});

const port = 3000;

server.listen(port, () => {
    console.log(`the server is running on port ${port}...`);

});