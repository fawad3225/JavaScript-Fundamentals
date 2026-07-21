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
// console.log(selectedCities);

/* Task 3: Iterate through an array when the number '4' is found, Stop the loop
           using "For-of" lopp */
let arr1 = [1, 2, 3, 4, 5];
let smallArr = [];
for (const num of arr1) {
  if (num == 4) {
    break;
  }
  smallArr.push(num);
}
// console.log(smallArr);

/* Task4: Using for-of looo */
let numbers = [10, 12, 13, 14];
let smallArray = [];
for (const element of numbers) {
  if (element === 13) {
    continue;
  }
  smallArray.push(element);
}
// console.log(smallArray);

/* Task5: Use for-in loop to loop through an array conatining cities population, Stop when population of Berlin is found */

let citiesPopulation = {
  Islamabad: 10000,
  London: 20000,
  Berlin: 30000,
  NewYork: 50000,
};
let cityPopulation = {};

for (let city in citiesPopulation) {
  // if (city === "Berlin") {
  //   continue;
  // }
  // cityPopulation[city] = citiesPopulation[city];
  if (citiesPopulation[city] >= 40000) {
    // console.log("Large city = " + city + " : " + citiesPopulation[city]);
  }
}
// console.log(cityPopulation);

/* Task6: Write for-Each loop to iterate through a loop, Skip sydney and store in a new array name "famousCities*/
let allCities = ["Islamabad", "Peshawar", "Karachi", "Mardan", "Lahore"];
let famousCities = [];

allCities.forEach((shahars) => {
  if (shahars == "Mardan") {
    return;
  }
  famousCities.push(shahars);
});
// console.log(famousCities);

/* Task 7: Iterate through an skip 6 and multiply rest with 2*/
let arr2 = [2, 4, 6, 8, 10];
let newArray = [];
for (let index = 0; index < arr2.length; index++) {
  if (arr2[index] === 6) {
    continue;
  }
  newArray.push(arr2[index] * 2);
}
// console.log(newArray);

/* Task 8: iterate through an array, stop when the length of current tea name is greater than 10 */
let chai = ["Green Tea", "Black Tea", "ooLong Tea", "Pink Tea"];
let newChai = [];
for (const tea of chai) {
  if (tea.length > 10) {
    break;
  }
  newChai.push(tea);
}
console.log(newChai);
