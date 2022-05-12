class Empleado {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return `El nombre del empleado es ${this.nombre}`;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(noEmpleados) {
        this.noEmpleadosACargo = noEmpleados;
    }
}
let empleado1 = new Empleado("Juan Perez", "66432947654");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Wilson Garcia", "6642039387");
//# sourceMappingURL=oop.js.map