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