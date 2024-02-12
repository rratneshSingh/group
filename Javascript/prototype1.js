function Person(name) {
    this.name = name;
}
Person.prototype.msg = 'Hello'; 
const p1 = new Person('John');
const p2 = new Person('David');

console.log(p1.name); // John
console.log(p2.name); // David
console.log(p1.constructor); // Function Person
console.log(p2.constructor); // Function Person
console.log(p1.constructor === p2.constructor); // false
console.log(p1.__proto__);

