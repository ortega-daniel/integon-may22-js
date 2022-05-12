global.XMLHttpRequest = require('xhr2');

function accesoApi() {
    const url = "https://swapi.dev/api/planets/1";

    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url);
    xhttp.setRequestHeader('Accept', 'application/json');

    xhttp.onreadystatechange = function() {
        if (this.readyState == 3) {
            console.log("Loading...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            console.log(data);
        }
    }

    xhttp.send();
}

accesoApi();