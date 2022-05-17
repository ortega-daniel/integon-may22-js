const form = document.querySelector("#myForm");
let registros = [];

form.addEventListener("submit", e => {
    e.preventDefault();

    let errMsgs = [];

    let nombre = document.querySelector("#nombre").value.trim();
    let edad = parseInt(document.querySelector("#edad").value.trim());
    let ingreso = parseInt(document.querySelector("#ingreso").value.trim());
    
    if (nombre === "") {
        errMsgs.push("nombre invalido");
    }

    if (isNaN(edad)) {
        errMsgs.push("edad invalida");
    }

    if (isNaN(ingreso)) {
        errMsgs.push("ingreso invalido");
    }

    if (errMsgs.length > 0) {
        alert(errMsgs.join());
        return;
    }

    let registro = {
        "nombre": nombre,
        "edad": edad,
        "ingreso": ingreso
    }

    registros.push(registro);

    console.log(registros);
});