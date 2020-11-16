"use strict";

// Express.js-Code:

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