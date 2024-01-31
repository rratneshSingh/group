// Synchronous
// Admit card checking
// Room No
// Seat No
// Id card
// Question Paper
// Anwer Sheet


// Asynchronous


// customer 1

// order 1 - wt1
// cook 1 - chef - wt2
// serve 1 - wt5

// customer 2

// order 2 - wt3
// cook 2 - chef - wt4
// serve 2 - wt6

console.log('Hello1'); // Thread
setTimeout(function(){ 
    console.log('Hello2'); // Thread
}); // Timer
console.log('Hello3'); // Thread
// JSCompiler -> Thread 
// TimerApi -> Queue[fn] -> Thread -> fn()