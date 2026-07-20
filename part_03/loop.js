//Task 1: Sum of all numbers from 1 to 5
let i = 1;
let sum = 0;
while (i <= 5) {
  console.log(i);
  sum = sum + i;
  i++;
}
console.log("Sum : ", sum); 

//     Task 2: Counts down from 5 to 1 and storing in Array name countDown
let countDown = [];
let i = 5;
while (i >= 1) {
  countDown.push(i);
  i--;
}
console.log(countDown);

// Task 3: Write "Do-While" Loop to prompt a user to enter their favorite tea type until they enter "stop" . Store each tea type in an array named "teaCollection"
let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter your favorite tea (type "stop" tp finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
console.log(teaCollection);

// Task 4: Adds numbers from 1 to 3 and store in variable 'total'
let total;
let i = 1;
let sum = 0;
do {
  sum = sum + i;
  i++;
} while (i <= 3);
total = sum;
console.log(total);

// Task 5: Write for loop that multiplies each elements in the Array and stores the result in a new array named multipliedNumbers
let multipliedNumbers = [];
let arr = [2, 4, 6];

for (let index = 0; index < arr.length; index++) {
//   let element = (arr[index] * 2) ;
//   multipliedNumbers.push(element);
     multipliedNumbers.push(arr[index] * 2);
}
console.log(multipliedNumbers);

// Task 6: Write for loop that lists all cities in the array and stores each city in a new array named citylist.
let citylist = [];
let arr = ["Paris", "Tokyo", "New York"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  citylist.push(element);
}

console.log(citylist);
