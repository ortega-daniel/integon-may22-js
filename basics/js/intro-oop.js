class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultaDetalles() {
        return `El nombre del animal es ${this.nombre} y su tipo es: ${this.tipo}`;
    }
}

class Mamifero extends Animal {
    constructor(nombre, tipo, especial) {
        super(nombre, tipo);
        this.especial = especial;
    }

    consultaDetalles() {
        return `El nombre del animal es ${this.nombre} y su tipo es: ${this.tipo}, el campo especial es: ${this.especial}`;
    }
}

function imprimeAnimal(animal) {
    try {
        console.log(animal.consultaDetalles());
    } catch (error) {
        console.log("Se recibio un objeto que no es animal");
    }
}

let animal1 = new Animal("hipopotamo", "mamifero");
let animal2 = new Animal("pelicano", "ave");
let mamifero1 = new Mamifero("toro", "mamifero", "especial");

imprimeAnimal(animal2);

imprimeAnimal(mamifero1);