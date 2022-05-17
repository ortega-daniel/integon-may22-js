let x = "Sergio Daniel Gonzalez Ortega";

x = 100;

x = true;

//console.log(x);

x = {
    name: "Sergio",
    city: "Tijuana",
    profesion: "Informatica"
};

//console.log(x);

x = function(a, b) {
    if (a > b)
        return a
    else
        return b;
}

console.log(x(10, 22));
console.log(typeof x);

x = new Date();
console.log(typeof x);