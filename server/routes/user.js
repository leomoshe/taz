'use strict';

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

const express = require('express');
const router = new express.Router();
const { User } = require('../models/user')
const utils = require('./utils')
const { body, check } = require('express-validator');

// $ curl -X GET http://localhost:8080/user
router.get('/', function (req, res) {
    res.send(utils.getRecords('user'));
});

// $ curl -X GET http://localhost:8080/user/1
router.get('/:id', function (req, res) {
    const id = req.params.id;
    res.send(utils.getRecord('user', parseInt(id)));
});


const userRules = () => {
  return [
    body('username').isEmail().withMessage('Must be email'),
    body('password').isLength({ min: 5 }).withMessage('Must have more than 5 characters'),
    check('firstname').isAlpha().withMessage('Must be only alphabetical chars').isLength({ min: 5 }).withMessage('Must have more than 5 characters'),
    check('lastname').isAlpha().withMessage('Must be only alphabetical chars').isLength({ min: 5 }).withMessage('Must have more than 5 characters'),
  ]
}

// $ curl -H "Content-Type: application/json" -d '{"username": "1@gmail.com", "password": "11111", "firstname": "AAAAA", "lastname": "AAAAA"}' -X POST http://localhost:8080/user/1
router.post('/:id', userRules(), utils.validateRules, (req, res) => {
    const id = req.params.id;
    let data = req.body;
    var user = new User(parseInt(req.params.id), req.body.username, req.body.password, req.body.firstname, req.body.lastname);
    //data.id = parseInt(id);
    //utils.addRecord('user', data);
    utils.addRecord('user', user);
    res.end("added");
});

// $ curl -X DELETE http://localhost:8080/user/1
router.delete('/:id', function (req, res) {
    const id = req.params['id'];
    if (utils.removeRecord('user', parseInt(id))) {
        res.end("removed");
    } else {
        res.end("doesn't exist");
    }
});

module.exports = router;