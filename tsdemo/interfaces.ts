interface IMedioDeTransporte {
    motor: string;
    color: string;

    frenar: () => void;
}

class Automovil implements IMedioDeTransporte {
    motor: string;
    color: string;

    constructor(motor: string, color: string) {
        this.motor = motor;
        this.color = color;
    }
    
    frenar() : void {
        console.log("automovil frenando");
    }
}

class Autobus implements IMedioDeTransporte {
    constructor(motor: string, color: string) {
        this.motor = motor;
        this.color = color;
    }
    
    motor: string;
    color: string;

    frenar() : void {
        console.log("autobus frenando");
    };
}