class A {
    name;
    afn() {
        console.log('From A');
    }
}

class B extends A {
    age;
}

class C extends B{
    salary;
}


const c = new C();
console.log(c);
A.prototype.afn();