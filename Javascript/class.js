// ES6

class Person {

    firstName;
    lastName;

    constructor(firstName, lastName) {
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
        console.log(this);
    }

    showFullName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

var p1 = new Person('John', 'Doe');
var p2 = new Person('Sam', 'Doe');
p1.constructor.prototype.showFullName = function() {
    console.log('Hello' + this.firstName);
}
p1.showFullName();
p2.showFullName();

console.log(p1);
console.log(p2);
// console.log(p1.showFullName === p2.showFullName);
// console.log(Object.getPrototypeOf(p1));

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.showFullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// var p1 = new Person("John", "Doe");
// var p2 = new Person("Sam", "Doe");
// p1.showFullName();
// p2.showFullName();

// console.log(p1.showFullName === p2.showFullName);
// console.log(p1);


var arr1 = ['john'];
var arr2 = ['Sam'];

// arr1 = arr1.map(function(item, index){
//     return item + '-' + index;
// })

// arr2 = arr2.map(function(item, index){
//     return item + '-' + index;
// })

Array.prototype.modify = function () {
    return this.map(function(item, index){
        return item + '-' + index;
    })
}

console.log(Array.prototype.map);




