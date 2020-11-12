// Nur zur Erklärung:

class meineApp {
    anfragen = [];

    get(url, funktion) {
        this.anfragen[this.anfragen.length] = { url, funktion };
    }

    aufruf(url, req, res) {
        for (let i = 0; i < this.anfragen.length; i++) {
            if (this.anfragen[i].url === url) {
                this.anfragen[i].funktion(req, res);
            }
        }
    }
}