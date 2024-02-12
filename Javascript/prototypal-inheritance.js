function LivingBeing() {
}

LivingBeing.prototype.breath = function() {
    console.log('Can Breath');
}

function Person(name) {
    this.name = name;
}

Person.prototype = Object.create(LivingBeing.prototype);
Person.prototype.constructor = Person;

Person.prototype.talk = function () {
    console.log('Can talk');
}

const p1 = new Person('John');
const p2 = new Person('David');

p1.talk();
p2.talk();
console.log(p1.constructor);
p1.breath();
p2.breath();
