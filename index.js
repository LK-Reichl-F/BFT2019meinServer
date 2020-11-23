"use strict";

// Laden der Node.js-Bibliotheken (siehe npmjs.org):

// Siehe https://socket.io/get-started/chat/
const express = require('express'); 
const app = express();
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
    console.log("socket.id: " + socket.id);

    socket.on("Gruß vom Browser", function (daten) {
        console.log("Gruß vom Browser mit den Daten " + daten);
        socket.emit("Gruß vom Server", "Danke für die Info!");
    });
    
    socket.on("disconnect", function () {
        console.log("Verbindung zum Browser beendet.");
        console.log("socket.id: " + socket.id);
    });
});