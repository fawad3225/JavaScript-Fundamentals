/* ------------- Practicing Conditional Statements ---------------------*/

// Task 1 – Positive, Negative, or Zero
let num = -5;
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// Task 2 – Even or Odd
let num1 = 7;
if (num1 % 2 == 0){
  console.log("Even number")
} else {
  console.log("Odd number")
}

// Task 3 – Eligible to Vote
let age = 17;
if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not-Eligible to Vote");
}

// Task 4 – Largest of Two Numbers
let a = 45;
let b = 46;
if (a == b) {
  console.log("Both are equal");
} else if (a > b) {
  console.log(`${a} is greater`);
} else {
  console.log(`${b} is greater`);
}

// Task 5 – Student Pass/Fail
let marks = 50
if (marks === 100){
  console.log(`A1 Grade`)
} else if (marks >= 90){
  console.log(`A Grade`)
} else if (marks >= 80){
  console.log(`B Grade`)
} else if (marks >= 70){
  console.log(`C Grade`)
} else if (marks >= 60){
  console.log(`D grade`)
} else if (marks > 50){
  console.log(`E Grade`)
} else if (marks === 50 ){
  console.log (`Just Passed`)
} else {
  console.log (`Fail`)
}

// Task 6 – Password Checker
let Password = "admin123"
if (Password === "admin123"){
  console.log("Login Successful")
} else{
  console.log("Invalid Password")
}

// Task 7 – Salary Tax
let salary = 40000
if (salary > 100000){
  console.log(`20% Tax`)
} else if(salary > 60000 && salary <= 100000 ){
  console.log(`10% Tax`)
} else if (salary > 30000 && salary <= 60000){
  console.log(`5% Tax`)
} else{
  console.log(`No Tax`)
}