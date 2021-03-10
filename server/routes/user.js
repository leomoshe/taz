'use strict';

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

const express = require('express');
const router = new express.Router();
const utils = require('./utils')

router.get('/', function (req, res) {
    res.send(utils.getRecords('user'));
});

// $ curl -X GET http://localhost:8080/user/1
router.get('/:id', function (req, res) {
    const id = req.params.id;
    res.send(utils.getRecord('user', parseInt(id)));
});

// $ curl -H "Content-Type: application/json" -d '{"id":"3", "name": "bla"}' -X POST http://localhost:8080/user/1
router.post('/:id', function (req, res) {
    const id = req.params.id;
    let data = req.body;
    data.id = parseInt(id);
    utils.addRecord('user', data);
    res.end("added");
});

router.delete('/:id', function (req, res) {
    const id = req.params['id'];
    if (utils.removeRecord('user', parseInt(id))) {
        res.end("removed");
    } else {
        res.end("doesn't exist");
    }
});

module.exports = router;