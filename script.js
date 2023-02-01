class Person {
    
    constructor(name = 'anonymous', lastName, age) {
        this.name = name;
        this.lastName = lastName ? lastName : '';
        this._age = age > 0 ? age : 0;
    }

    get fullName() {
        return this.name + ' ' + this.lastName;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            this._age = 0;
        } else 
            this._age = value;
    }

    sayName() {
        console.log(`hello, my name is ${this.name}!`);
    }
}

const myPerson = new Person('Moshe');
const myOtherPerson = new Person();
myPerson.sayName();
myOtherPerson.sayName();