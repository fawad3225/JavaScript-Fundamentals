// Task 1: loop through an array, whenever certain condition met with element of an array then stop the loop
let teas = ["Green tea", "Black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") {
    break;
  }
  selectedTeas.push(teas[index]);
}
// console.log(selectedTeas);

// Task 2: Loops through an array that skip one element from array
let cities = ["Mardan", "Islamabad", "Peshawar", "Lahore"];
let selectedCities = [];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "Peshawar") {
    continue;
  }
  selectedCities.push(cities[index]);
}
console.log(selectedCities);
