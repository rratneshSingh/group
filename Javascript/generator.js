function* MyGenerator() {
    console.log('Start');
    yield 1;
    console.log('Next 1');
    yield 2;
    console.log('Next 2');
    return 3
}

var generator = MyGenerator();
// var output1 = generator.next();
// var output2 = generator.next();
// var output3 = generator.next();
// console.log(output1);
// console.log(output2);
// console.log(output3);

for (var res of generator) {
    console.log(res);
}



