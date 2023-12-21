var a = 10;

function show() {
    var a = 7; 
    function print() {
        a = 5;
        console.log(a); // 5
    }
    print();
    console.log(a); // 7
}
show();
console.log(a); // 10


// GEC - GS: a:undefined - > 10, showFn
// SEC -> SC: a:undeinfed -> 7 -> 5, printFn
// PEC -> PC: 

// 5
// 5
// 10