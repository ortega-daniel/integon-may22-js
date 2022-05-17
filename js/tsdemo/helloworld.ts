type Registro = [number, string, boolean];
let registros: Array<Registro> = [];

let msg: string = "Hello world";
let dato: number = 5;
let encendido: boolean = false;
let otraCadena: string = "";

let ejemplo1: Registro = [10, "string 1", true];
let ejemplo2: Registro = [20, "string 2", false];
let ejemplo3: Registro = [30, "string 3", true];

registros.push(ejemplo1);
registros.push(ejemplo2);
registros.push(ejemplo3);

function imprimirRegistros(registros: Array<Registro>) : void {
    for (const registro of registros) {
        console.log(registro);
    }
}

imprimirRegistros(registros);

/* console.log(msg);

let encabezado = document.createElement("h1");
encabezado.textContent = msg;
document.body.appendChild(encabezado); */