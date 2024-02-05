// state -> a = 10; instance 1
// state -> a = 20; instance 2

// all function is object.
// all object are created from a function.



// object created by funciotn
// funcition create by Function

// const fn = new Function();

// GS -> A -> fnObj
function A(city, state) {
    this.city = city;
    this.state = state;
    console.log('Hello');
}

// A = {
//     name: 'A',
//     prototype: new Object()
// }

// Object = {
//     prototype: {
//         tpString
//     }
// }

console.log(A.name);
console.log(A.prototype);
A.prototype.country = 'India';
const addr1 = new A('Prayagraj', 'UP');
const addr2 = new A('Varansi', 'UP');
console.log(addr1);
console.log(addr2);
console.log(addr1.country);
console.log(addr2.toString());
console.log(Object.prototype.toString());
