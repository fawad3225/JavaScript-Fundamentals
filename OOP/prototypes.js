let computer = { Cpu: 12 };
let Lenovo = {
    screen : "HD",
    __proto__: computer
}
console.log(Lenovo.__proto__);
console.log(Lenovo.Cpu);
console.log(Lenovo);

