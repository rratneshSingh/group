console.log("output1",a);
var a = 10;
var c = 5;
console.log("output2", a);

function add() {
    var a = 5;
    var b = 7;
    c = 7;
    var d = a + b + c; // 5 + 7 + 7 -> 19
    console.log("output2.1", d);
}

add();
console.log("output3", a);
console.log("output4", d);
// GEC -> GS -> (a:undefined -> 10), (c:undefined -> 5 -> 7), (add: fn)
// 1. G -> Compile -> done
// 2. G -> Run -> output1 undefined -> output2 10 --> add ---> output3 10, Reference error

// AEC -> AS -> (a:undefined -> 5), (b:undefined -> 7) (d:undefined -> 19)
// 1. Add -> Compile -> done
// 2. Run -> Run -> output 2.1 -> 19