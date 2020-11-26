"use strict";

// Laden der Node.js-Bibliotheken (siehe npmjs.org):

// Siehe https://socket.io/get-started/chat/
const express = require('express'); 
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

// Express-Code:

app.use(express.static('public'));// Express.js-Code:

async function rufeServer() {
    const ersteZahl = document.getElementById("ersteZahl").value;
    const zweiteZahl = document.getElementById("zweiteZahl").value;
    const url = new URL("http://192.168.247.132:3000/summe");
    url.searchParams.append("a", ersteZahl);
    url.searchParams.append("b", zweiteZahl);
    document.getElementById("url").innerHTML=url.toString();

    let ergebnis;
    try {
        const versprechen = await fetch(url);
        ergebnis = await versprechen.json();
    } catch (meineException) {
        console.log(meineException);
    }
    document.getElementById("ergebnis").innerText=ergebnis.summe;
}

// WebSocket-Code:

const socket = io.connect();
socket.on("Gruß vom Server", function (daten) {
   console.log(daten);
});
socket.emit("Gruß vom Browser", "Hi Server!");