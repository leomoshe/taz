'use strict';

const express = require('express');
const router = new express.Router();

// $ curl -X GET http://localhost:8080
router.get('/', function (req, res) {
    res.redirect('/api');
});

module.exports = router;