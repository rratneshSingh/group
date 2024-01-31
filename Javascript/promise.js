

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Done');
    }, 5000);
});

promise.then(function(data){
    console.log(data);
});

promise.catch(function(data){
    console.log(data);
})



// promise
// then -> fn1
// catch -> fn2
// 5000 -> resolve('Done') -> fn1('Done')
// 5000 -> reject('Error') -> fn2('Error')

