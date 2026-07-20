/* ------------------ Array -------------------- */

// Task1: Accessing elements of an Array
const teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
let secondTea = teaFlavors[1];
let thirdTea = teaFlavors[2];
// console.log(firstTea);

// console.log(secondTea);

// console.log(thirdTea);

// Task2: Displaying third element
let cities = ["London", "Paris", "Tokyo", "New York"];

const favoriteCity = cities[2];
// console.log(favoriteCity);

// Task 3: Changing elements of an Array
let teaType = ["Herbel Tea", "White Tea", "Masla chai"];

teaType[1] = "Jasmine Tea";
// console.log(teaType);

// Task 4: Adding element to an Array using Push method
let citiesVisited = ["Peshawar", "Islamabad"];
citiesVisited.push("Lahore");
// console.log(citiesVisited);

// Task 5: Removing Last element of an Array using pop method
let teaOrder = ["Chai", "iced Tea", "Matcha", "earl grey"];
const lastOrder = teaOrder.pop(2);
// console.log(lastOrder);

// Task 6: Making softCopies of an Array
let subjects = ["English", "Math", "Science"];
const softCopies = subjects;
softCopies.push("Urdu");
// console.log(subjects);
// console.log(softCopies);

// Task 7: Making Hardcopy of Array
let course = ["CS-101", "CS-102", "CS-103"];
let hardCopyCourse = [...course];
hardCopyCourse.pop();
// console.log(hardCopyCourse);
// console.log(course);

// Task 8: Merging two arrays ---- using concat()
let europeanCities = ["Paris", "Rome "];
let asianCities = [" Islamabad", "Delhi"];
const worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

// Task 9: Finsing length of an Array
let teaMenu = ["oolongTea", "greenTea", "masalaTea"];
const menuLength = teaMenu.length;
// console.log(menuLength);

// Task 10: checking if element is include in an Array or not-----Using include()
let list = ["Fawad", "Ali", "Ahmad", "Zeeshan"];
let isFawadInList = list.includes("Fawad");
// console.log(isFawadInList);

let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));