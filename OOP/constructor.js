/*--------Constructor Function ----------*/
function Car(Brand, Model) {
  this.Brand = Brand;
  this.Model = Model;
}
let car1 = new Car("Toyota", 2026);
console.log(car1);

// Constructor Function with prototype
function Tea(type) {
  this.type = type;
}
Tea.prototype.taste = function () {
  return `${this.type} is very Fantastic`;
};
let tea1 = new Tea("Chai");
console.log(tea1.taste());
