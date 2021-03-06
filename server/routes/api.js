'use strict';

const express = require('express');
const router = new express.Router();

// $ curl -X GET http://localhost:8080/api
router.get('/', function (req, res) {
    const data = {
        "user": {
            "GET: /": {
                "Purporse": "Retrieve all the users"
            },
            "GET /:id": {
                "Purporse": "Retrieve the id user"
            } ,
            "POST /:id": {
                "Purporse": "Add user"
            } ,
            "DELETE /:id": {
                "Purporse": "Delete user"
            }
        }
    }
    res.send(data);
});

module.exports = router;