const express = require('express');
const { Maths } = require('../data/courses').infoCourses;

const routerMath = express.Router();

// Middleware
routerMath.use(express.json());

// Routes for math courses
routerMath.get('/', (req, res) => {
    res.send(JSON.stringify(Maths));
});

routerMath.get('/:theme', (req, res) => {
    const theme = req.params.theme;
    const results = Maths.filter(course => course.theme === theme);

    if (results.length === 0) {
        return res.status(404).send(`The course of ${theme} was not found`);
    }
    res.send(JSON.stringify(results));
});

// Route with two parameters for math courses
routerMath.get('/:theme/:level', (req, res) => {
    const theme = req.params.theme;
    const level = req.params.level;
    const results = Maths.filter(course => course.theme === theme && course.level === level);

    if (results.length === 0) {
        return res.status(404).send(`The course of ${theme} and ${level} was not found`);
    }

    res.send(JSON.stringify(results));
});

// Add a new math course
routerMath.post('/', (req, res) => {
    const newCourse = req.body;

    console.log('Received new course data:', newCourse);

    if (!newCourse.id || !newCourse.title || !newCourse.theme || !newCourse.level || !newCourse.views) {
        return res.status(400).send('Invalid course data');
    }

    Maths.push(newCourse);
    res.send(JSON.stringify(Maths));
});

// Update a math course completely by ID
routerMath.put('/:id', (req, res) => {
    const updatedCourse = req.body;
    const id = req.params.id;

    const index = Maths.findIndex(course => course.id == id);

    if (index >= 0) {
        Maths[index] = updatedCourse;
        res.send(JSON.stringify(Maths));
    } else {
        res.status(404).send('Course not found');
    }
});

// Update a math course partially by ID
routerMath.patch('/:id', (req, res) => {
    const updatedCourse = req.body;
    const id = req.params.id;

    const index = Maths.findIndex(course => course.id == id);

    if (index >= 0) {
        const courseToModify = Maths[index];
        Object.assign(courseToModify, updatedCourse);
        res.send(JSON.stringify(Maths));
    } else {
        res.status(404).send('Course not found');
    }
});

// Delete a math course by ID
routerMath.delete('/:id', (req, res) => {
    const id = req.params.id;

    const index = Maths.findIndex(course => course.id == id);

    if (index >= 0) {
        Maths.splice(index, 1);
        res.send(JSON.stringify(Maths));
    } else {
        res.status(404).send('Course not found');
    }
});

module.exports = routerMath;
