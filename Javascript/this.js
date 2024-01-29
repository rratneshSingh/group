// this - keyword

function A(name, age) { // parameter
    console.log(this);
    console.log(name, age);
}

// A('John', 20); // arguments

// var newFn = A.bind({
//     name: ''
// });

// newFn();

A.call({
    name: ''
}, 'Rock', 29);

A.apply({
    name: ''
}, ['Rock', 39]);

class Student {

    firstName = ''
    constructor() {
    }
}

class Employee {

    firstName = ''
    constructor() {
    }

    captalizeFirstName() {
        // this -> undefined
        this.firstName = this.firstName.toUpperCase();
    }
}

// attibutes, methods

var obj = new Employee();
obj.firstName = 'John';
obj.captalizeFirstName();

var fn = obj.captalizeFirstName;
fn.call(obj);
console.log(obj);

var student = new Student();
student.firstName = 'Sam';
fn.call(student);
console.log(student);







