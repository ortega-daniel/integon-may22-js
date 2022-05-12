function getAlumnos() {
    const url = "http://localhost:3000/alumnos";

    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Accept', 'application/json');

    xhttp.onreadystatechange = function() {
        if (this.readyState == 1) {
            console.log("Opened..");
        }
        if (this.readyState == 3) {
            console.log("Loading..");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            console.log(data);

            appendAlumnos(data);
        }
    }

    xhttp.send();
}

function appendAlumnos(data) {
    let list = document.getElementById("alumnos");

    data.alumnos.forEach(alumno => {
        let li = document.createElement("li");
        li.innerText = `${alumno.nombre} ${alumno.apellido} de ${alumno.ciudad}`;
        list.appendChild(li);
    });
}

getAlumnos();