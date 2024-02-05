// object
// {
//     name: 'John',
//     age: 24
// }

// typrecount: 4, maxSpeed: 120, seater: 5

// Creation of Objects


// Method 1
function Student(name) {
    this.name = name
}

const student1 = new Student('John');
console.log(student1);


// Method 2
class Person {
    constructor(name) {
        this.name = name;
    }
}

const person1 = new Person();


console.log(person1);

// Programming Paradigm
// Functional Programming
// OOP -> class based / object based 
// Procedural Programming

// Method 3
// Object Literal

const employee = {
    name: 'John',
    age: 40
}

// const employee1 = new Object({
//     name: 'John',
//     age: 40
// });

console.log(employee);
// console.log(employee1);
console.log(employee.constructor);

// console.log(Object);


// Create New Property in object

employee.salary = 40000;

// Adding dynamic property
const newProp = 'addr';
const newPropValue = 'Prayagraj UP';
employee[newProp] = newPropValue;

console.log(employee);

// Delete a property
delete employee.salary;

console.log(employee);







function A() {
    this.name = 'Ramesh';
    this.sayHello = function(msg, comment){
        // console.log('Say Hello');
        console.log(this.name + ', Message:' + msg + ', Comment:' + comment);
    }
}

var a = new A();


var b = {
    name: 'Shyam',
    age: 45  
};

// a.sayHello.call(b, 'Hi', 'My coment');
// a.sayHello.apply(b, ['Hi', 'dklskd']);
var newFn = a.sayHello.bind(b, 'Hi', 'llklkl');

newFn();



// call , bind , apply


// console.log(b);

var c = new Object();


// console.log(c);
