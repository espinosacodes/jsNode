const express = require('express');

const {programming} = require('../data/courses').infoCourses;

const routerProgramming = express.Router();

// Middleware
routerProgramming.use(express.json());


routerProgramming.get('/', (req, res) => {
    res.send(JSON.stringify(programming));
});

// URL parameters for programming courses
routerProgramming.get('/:language', (req, res) => {
    const language = req.params.language;
    const results = programming.filter(course => course.language === language);

    if (results.length === 0) {
        return res.status(404).send(`The course of ${language} was not found`);
    }

    res.send(JSON.stringify(results));
});


routerProgramming.post('/', (req, res) => {
    let newCourse = req.body;

    console.log('Received new course data:', newCourse);

    if (!newCourse.id || !newCourse.title || !newCourse.language || !newCourse.level || !newCourse.views) {
        return res.status(400).send('Invalid course data');
    }

    programming.push(newCourse);
    res.send(programming);
});



routerProgramming.put('/:id', (req, res) => {
    const updatedCourse = req.body;
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id); // == because id is a string

    if (index => 0){
        programming[index] = updatedCourse;
    }
    res.send(JSON.stringify(programming));

});


routerProgramming.patch('/:id', (req, res) => {
    const updatedCourse = req.body;
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id); // == because id is a string

    if (index => 0){
        const courseToModify = programming[index];
        Object.assign(courseToModify, updatedCourse);
    }
    res.send(JSON.stringify(programming));

});

routerProgramming.delete('/:id', (req, res) => {
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id); // == because id is a string

    if (index => 0){
        programming.splice(index, 1);
    }
    res.send(JSON.stringify(programming));

});


module.exports = routerProgramming;
