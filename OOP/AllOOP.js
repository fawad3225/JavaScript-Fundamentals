// Creating Class
class Car {
  constructor(tyres, engine) {
    this.tyres = tyres;
    this.engine = engine;
  }
  start() {
    console.log(`${this.engine} is started`);
  }

  displayInfo() {
    console.log(`Engine: ${this.engine}  Tyres: ${this.tyres}`);
  }
}
// Creating Object for class
let car1 = new Car("Panther", "V8");
let car2 = new Car("Cheetah", "1.5 hybrid");

// console.log("car1 ");
// car1.start();
// car1.displayInfo();

// console.log('car2 ');
// car2.start();
// car2.displayInfo();

/*-----------          Inheritance        ----------*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog1 = new Dog("Germen Shepard");
console.log(dog1);
dog1.eat();
dog1.bark();

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// Using Super()
class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound); // 👈 calls Animal's constructor
    this.breed = breed; // 👈 Dog's own extra property
  }
  
  fetch() {
    console.log(`${this.name} is fetching the ball`);
  }
}

const dog2 = new Dog("Rex", "Woof", "Labrador");
dog2.makeSound(); // Rex says Woof
dog2.fetch();     // Rex is fetching the ball
console.log(dog2.breed); // Labrador

// Method overriding
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {                    // 👈 overrides parent's method
    console.log("Woof Woof!");
  }
}

const dog3 = new Dog();
dog3.makeSound(); // Woof Woof!  ← Dog's version runs, not Animal's
