class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    info() {
        return console.log(this)
    }
}

class Teacher extends Human {
    constructor(name, age, gender, subject, grade) {
        super(name, age, gender);
        this.subject = subject;
        this.grade = grade;
    }

    info() {
        return console.log(this);
    }
}

let gaurav = new Human("Gaurav", 24, "Male");
let nishi = new Human("Nishi", 23, "Female");
let teacher = new Teacher("GauravMegla", 24, "Male", "Science", "A");

gaurav.info();
nishi.info();
teacher.info();