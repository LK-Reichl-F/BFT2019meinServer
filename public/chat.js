"use strict";

const socket = io.connect();

socket.on("NachrichtVomServer", function (daten) {
    const li = document.createElement("li");        // li-Element erzeugen
    const text = document.createTextNode(daten);    // Text-Inhalt erzeugen
    li.appendChild(text);                           // Text in li-Element einfügen
    const liste = document.getElementById("liste"); // Liste von der HTML-Seite holen
    liste.prepend(li);                              // li-Element am Anfang der Liste einfügen
});


function abschicken() {
    const text = document.getElementById("eingabe").value;
    socket.emit("Nachricht", text);
}