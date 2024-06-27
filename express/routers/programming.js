const express = require('express');

const {programming} = require('../data/courses').infoCourses;

const routerProgramming = express.Router();



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

module.exports = routerProgramming;
