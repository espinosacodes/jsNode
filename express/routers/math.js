const express = require('express');

const {Maths} = require('../data/courses').infoCourses;

const routerMath = express.Router();

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

module.exports = routerMath;