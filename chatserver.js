"use strict";

// Laden der Node.js-Bibliotheken (siehe npmjs.org):

// Siehe https://socket.io/get-started/chat/
const express = require('express'); 
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Express-Code:

app.use(express.static('public'));

http.listen(3001, function () {
    console.log("Chat-Server hört auf Port 3001");
})

// WebSocket-Code:

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log("socket.id: " + socket.id);
    io.emit("NachrichtVomServer", "Benutzer mit ID " + socket.id + " hat sich angemeldet.")

    socket.on("Nachricht", function (daten) {
        io.emit("NachrichtVomServer", daten);
    });
    
    socket.on("disconnect", function () {
        io.emit("NachrichtVomServer", "Benutzer mit ID " + socket.id + " hat sich abgemeldet.")
        console.log("Verbindung zum Browser beendet.");
        console.log("socket.id: " + socket.id);
    });
});