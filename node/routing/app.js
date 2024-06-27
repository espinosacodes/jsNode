const http = require('http');
const courses = require('./courses');


const server = http.createServer((req, res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            return manageGetRequest(req, res);
        case 'POST':
            return managePostRequest(req, res);
        case 'PUT':
            return managePutRequest(req, res);
        case 'DELETE':
            return manageDeleteRequest(req, res);
        default:
            console.log(`the method used is not supported \nthe method is ${method}`);

    }

});

function manageGetRequest (req,res){
    const path = req.url;

    if(path === '/'){ //200 if ok by default
        return res.end('Welcome to the courses page created with Node.js');
    }else if(path === '/courses'){
        return res.end(JSON.stringify(courses.infoCourses));

    } else if(path === '/courses/programming'){
        return res.end(JSON.stringify(courses.infoCourses.programming));

    } else if (path === '/courses/maths'){
        return res.end(JSON.stringify(courses.infoCourses.Maths));

    } else {
        res.statusCode = 404;
        return res.end('The requested resource was not found');
    }

}

function managePostRequest(req,res){
    const path = req.url;

    if (path === '/courses/programming'){
        res.statusCode = 200;
        return res.end('You have successfully added a programming course');
    }


}

function managePutRequest(req,res){
    const path = req.url;

    if (path === '/courses/programming'){
        res.statusCode = 200;
        return res.end('You have successfully updated a programming course');
    }

}

function manageDeleteRequest(req,res){

    const path = req.url;

    if (path === '/courses/programming'){
        res.statusCode = 200;
        return res.end('You have successfully deleted a programming course');
    }

}

const port = 3000;

server.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});







