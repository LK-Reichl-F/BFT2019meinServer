"use strict";

// Laden der Node.js-Bibliotheken (siehe npmjs.org):

// Siehe https://socket.io/get-started/chat/
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

// Express-Code:

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

// WebSocket-Code:

io.on('connection', (socket) => {
    console.log('a user connected');
  });