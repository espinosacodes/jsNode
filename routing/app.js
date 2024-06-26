const http = require('http');
const courses = require('./courses');


const server = http.createServer((req, res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            return manageGetRequest(req, res);
        default:
            console.log(`the method used is not supported \nthe method is ${method}`);

    }

});

function manageGetRequest (req,res){
    const path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        res.end('Welcome to the courses page created with Node.js');
    }else if(path === '/courses'){
        res.statusCode = 200;
        res.end(JSON.stringify(courses.infoCourses));

    } else if(path === '/courses/programming'){
        res.statusCode = 200;
        res.end(JSON.stringify(courses.infoCourses.programming));

    } else if (path === '/courses/maths'){
        res.statusCode = 200;
        res.end(JSON.stringify(courses.infoCourses.Maths));

    } else {
        res.statusCode = 404;
        res.end('The requested resource was not found');
    }



}

const port = 3000;

server.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});