let registros = [];
let msg = "Hello world";
let dato = 5;
let encendido = false;
let otraCadena = "";
let ejemplo1 = [10, "string 1", true];
let ejemplo2 = [20, "string 2", false];
let ejemplo3 = [30, "string 3", true];
registros.push(ejemplo1);
registros.push(ejemplo2);
registros.push(ejemplo3);
function imprimirRegistros(registros) {
    for (const registro of registros) {
        console.log(registro);
    }
}
imprimirRegistros(registros);
//# sourceMappingURL=helloworld.js.map