class CustomPromise {

    fn;
    resolveFn;
    rejectFn;

    constructor(fn){
        this.fn = fn;
        this.fn(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(data) {
        this.resolveFn(data);
    }

    reject(data) {
        this.rejectFn(data);
    }

    then(fn) {
       this.resolveFn = fn;
    }

    catch(fn) {
        this.rejectFn = fn;
    }
}

var promise = new CustomPromise(function(resolve, reject){
    setTimeout(function(){
        resolve('Done');
    }, 5000);
});

promise.then(function(data){
    console.log(data);
})