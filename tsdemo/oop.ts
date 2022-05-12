class Empleado {
    public nombre: string;
    private telefono: string;

    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    getNombre() {
        return `El nombre del empleado es ${this.nombre}`;
    }

    getTelefono() {
        return this.telefono;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setTelefono(telefono: string) {
        this.telefono = telefono;
    }
}

class Manager extends Empleado {
    private noEmpleadosACargo: number;

    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }

    setNoEmpleadosACargo(noEmpleados: number) {
        this.noEmpleadosACargo = noEmpleados;
    }
}

let empleado1 = new Empleado("Juan Perez", "66432947654");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Wilson Garcia", "6642039387");
