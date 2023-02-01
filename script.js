class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says hello world`);
    }

    eat() {
        console.log(`${this.name} eats!`);
    }

}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} says bark!`);
    }

    scratch() {
        console.log(`${this.name} scratches`);
    }
}

class Cat extends Dog {
    speak() {
        console.log(`${this.name} says meow!`);
    }
}



const human = new Animal('Moshe');
human.speak();

const rex = new Dog('Rex');
rex.speak();

const kitty = new Cat('kitty');
kitty.speak();