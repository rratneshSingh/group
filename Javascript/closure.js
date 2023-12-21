// function A(fn) {
//     fn();
// }

// function B() {
//     console.log('B');
// }

// A(B);


function C() {
    var a = 10;
    return function D() {
        console.log(a);
    }
}

var fn1 = C();

fn1();

// GEC -> GS -> fn1:undefined -> Dfn, Cfn
//G:L19
// CEC -> CS -> a:undefined - > 10, Dfn
// L13 -> return Dfn
// CEC destroy 
//G:L19
//G:L21
// DEC -> DS -> 
// 

