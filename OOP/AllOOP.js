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

console.log("car1 ");
car1.start();
car1.displayInfo();

console.log('car2 ');
car2.start();
car2.displayInfo();

/*-----------        1.  Inheritance        ----------*/
class Animals {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}
class Dog1 extends Animals {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog1 = new Dog1("Germen Shepard");
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
class Dog2 extends Animal {
  constructor(name, sound, breed) {
    super(name, sound); //  calls Animal's constructor
    this.breed = breed; //  Dog's own extra property
  }

  fetch() {
    console.log(`${this.name} is fetching the ball`);
  }
}

const dog2 = new Dog2("Rex", "Woof", "Labrador");
dog2.makeSound(); // Rex says Woof
dog2.fetch();     // Rex is fetching the ball
console.log(dog2.breed); // Labrador

// Method overriding
class Animalss {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog3 extends Animalss {
  makeSound() {
    // 👈 overrides parent's method
    console.log("Woof Woof!");
  }
}

const dog3 = new Dog3();
dog3.makeSound(); // Woof Woof!  ← Dog's version runs, not Animal's

/*-------------2. Encapsulation -------------*/
class BankAccount {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  showBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}
const account = new BankAccount(1000);
account.showBalance();

//---------Using getters and setters
class bankAccount {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Balanxe cannot be Negative");
    } else {
      this.#balance = amount;
    }
  }

  get balance() {
    return this.#balance;
  }
}

const Account = new bankAccount(1000);
console.log(Account.balance);

Account.balance = 500;
console.log(Account.balance);

/*----------3. Abstractions-------------*/
class CoffeeMachine {
  #heatWater() {
    console.log("Heating water to 100°C...");
  }

  #grindBeans() {
    console.log("Grinding coffee beans...");
  }

  #mixIngredients() {
    console.log("Mixing water and coffee...");
  }

  // This is the ONLY method exposed to the user
  makeCoffee() {
    this.#heatWater();
    this.#grindBeans();
    this.#mixIngredients();
    console.log("☕ Coffee is ready!");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();

/*-------------4. Polymorphism--------------*/
class Birds {
  fly() {
    return `All birds fly`;
  }
}

class Penguin extends Birds {
  fly() {
    return `Penguins don't fly`;
  }
}

const birds = new Birds();
const penguin = new Penguin();
console.log(birds.fly());
console.log(penguin.fly());


/*---------------static Method-----------*/
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
console.log(Calculator.add(3, 4));


