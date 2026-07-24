/*---------Ways of decalaring prototype ---------*/

// Type 1
let computer = { Cpu: 12 };
let Lenovo = {
  screen: "HD",
  __proto__: computer,
};
// console.log(Lenovo.__proto__);
// console.log(Lenovo.Cpu);
// console.log(Lenovo);

// Type 2
let car = { tyres: 4 };
let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, car);
console.log(Object.getPrototypeOf(tesla));
