let datoGeneral = 100;

calculo1();
calculo2();
console.log(datoGeneral);

function calculo1() {
    datoGeneral = 150;
    datoGeneral += 5;

    if (datoGeneral > 100) {
        let datoGeneral = 200;
        datoGeneral += 10;
    }
}

function calculo2() {
    datoGeneral += 10;
}