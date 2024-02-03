
"use strict";
// GEC -> GS

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// console.log(b); // Error
let b = 10;
console.log(b); // 10

// GEC -> GS -> fnC: (){ conssole.lof('C fn')}
// GEC -> GS - C:undefined ->  fnc()
// C();
var C = function D() {
  console.log("C Fn");
};
C();

// function A() {
//     var c = 5 + 1;

//     return function B() {
//         console.log(c);
//     }
// }

// var fnB = A();

// fnB();

// fnB ---> B
// AEC => FnAScope -> c: undefined -> 5, B: fn
// AEC - Dead, FnAScope

// var functional Scope

// function E() {
// console.log(f);
//     var f = 10;
// console.log(f);

// }

// E();

// console.log(f);

// if (true) {
//   var g = 10;
//   let i = 5;
//   console.log(i);
// }

// console.log(g);
// console.log(i);

function J() {
    // console.log(k);
    k = 9;
    console.log(k);
}
// console.log(k);
J();
console.log(k);
