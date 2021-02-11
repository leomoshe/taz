'use strict';

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

const express = require('express');
const router = new express.Router();
const utils = require('./utils')

router.get('/', function (req, res) {
    res.send(utils.getRecords('user'));
});

router.get('/:id', function (req, res) {
    let id = req.params.id;
    res.send(utils.getRecord('user', id));
});

router.post('/:id', function (req, res) {
    let id = req.params.id;
    const data = {id: 1, name: 'alalo'};
    utils.addRecord('user', data);
    res.end("added");
});

router.delete('/', function (req, res) {
    let id = req.params['id'];
    utils.removeRecord('user', id);
    res.end("removed");
});

module.exports = router;