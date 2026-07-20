// operation in JavaScript

// Task 1
let english = 80;
let math = 90;
let science = 75;

let totalMarks = english + math + science;
let averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log(averageMarks >= 50);

// Task 2
let age = 18;
age >= 18
  ? console.log("Eligible to vote")
  : console.log("Not Eligible to vote");

// Task 3
let number = 18;
number % 2 == 0 ? console.log("Even") : console.log("Odd");

// Task 4
let isLoggedIn = true;
let isEmailVerified = false;

isLoggedIn && isEmailVerified ? console.log("Access Granted") : console.log("Login Required or verify your Email");

// Task 5: Swapping variable
let a = 5
let b = 10
let c 

console.log("Before Swapping")
console.log("a : ", a , "b : ", b)

c = a
a = b
b = c  

console.log("After swapping")
console.log("a : ", a , "b : ", b)
