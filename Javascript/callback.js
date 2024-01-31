class Person {
    firstName;
    lastName;
    age;
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age
    }
}

function printMsgWithFullName(person, fn) {
    const fullName = person.firstName + '-' + person.lastName; // Bank
    if (fn) {
        fn(fullName);
    } 
}

const p1 = new Person('John', 'Doe', 20);

printMsgWithFullName(p1, function(fullName){
    console.log('Hello Dear, ' + fullName); // Your code
});
