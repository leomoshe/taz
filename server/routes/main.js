'use strict';

const express = require('express');
const router = new express.Router();

router.get('/', function (req, res) {
    res.redirect('/api');
});

module.exports = router;