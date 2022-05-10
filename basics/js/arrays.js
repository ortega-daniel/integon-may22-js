let numbers = [8, 9, 12, 45];

numbers.push(84);

console.log(numbers);

numbers.forEach(number => {
    console.log(number);
});

for (const i in numbers) {
    console.log(numbers[i]);
}

let personas = [];

personas.push({
    nombre: "Daniel",
    apellido: "Ortega"
});

personas.push({
    nombre: "Sergio",
    apellido: "Gonzalez",
    edad: 23
});

personas.forEach(p => {
    console.log(p);
});