"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World!');
});

app.get('/summe', function (req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const summe = a + b;
    //res.send(req.query);
    res.send({ "summe": summe });
});


app.listen(port, function () {
    console.log('Höre auf Port ' + port);
});