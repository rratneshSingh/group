let obj = {
    name: 'John'
}

Object.defineProperty(obj, 'age', {
    value: 20,
    writable: true,
    enumerable: true,
    configurable: true
});
obj.age = 50;
console.log(obj);


const descriptor = Object.getOwnPropertyDescriptor(obj, 'age');
descriptor.writable = false;
console.log(descriptor);
