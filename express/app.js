const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World xdxd');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});