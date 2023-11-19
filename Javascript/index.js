console.log(a); // undefined
var a = 10;
console.log(a); // 10


// GEC -> GS -> a -> (undefined => 10)
// 1. compile -> variable and funtion declaration are registered in there scope.
// 2. Run -> undefined, 


// variable access -> 1. Ref (assingment), 2. Value -> (expression => a+2, (a) )