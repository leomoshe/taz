'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080; // set in package.json to 3100. I don't know why 8080 is here'
//const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')

//Here we are configuring express to use body-parser as middle-ware.
// https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
app.use(bodyParser.urlencoded({ extended: true }));  // support encoded bodies
app.use(bodyParser.json());  // support json encoded bodies

// middleware that is specific to this router
app.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
//app.use('/', mainRouter);
app.use('/user', userRouter);

app.route('/echo')
    .all((req,res)=>{
        let pars = (Object.keys(req.body).length > 0)?req.body:req.query;
        res.send(pars);
    });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})