// Task 1 — Simple Greeting Function
function greeUser() {
  console.log("Hello Fawad! Welcome to JavaScript.");
}
greeUser();

// Task 2 — Function With a Parameter
function greetUser(name) {
  console.log(`Hello ${name}`);
}
// greetUser("Ali");

// Task 3 — Add Two Numbers
function add(a, b) {
  return a + b;
}
let sum = add(5, 6);
// console.log(`sum: ${sum}`);

// Task 4 — Calculate Rectangle Area
function rectangleArea(width, length) {
  return width * length;
}
let area = rectangleArea(10, 18);
// console.log(`Area of Rectangle : ${area}`);

// Task 5 — Check Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}
// console.log(checkEvenOdd(18));

// Task 6 — Positive, Negative, or Zero
function checkNumber(num) {
  if (num > 0) {
    return "Positive Number";
  } else if (num < 0) {
    return "Negative Number";
  } else {
    return "Zero";
  }
}
// console.log(checkNumber(990));

// Task 7 — Find the Largest of Two Numbers
function findLargest(a, b) {
  if (a > b) {
    return `${a} is greater`;
  } else if (b > a) {
    return `${b} is greater`;
  } else {
    return `Both are Equal`;
  }
}
// console.log(findLargest(19, 14));

// Task 8 — Find the Largest of Three Numbers
function findLargest(a, b, c) {
  if (a > b && a > c) {
    return `${a} is the largest`;
  } else if (b > a && b > c) {
    return `${b} is the largest`;
  } else if (c > a && c > b) {
    return `${c} is the largest`;
  } else if (a === b && b === c) {
    return "All three numbers are equal";
  } else if (a === b && a > c) {
    return `${a} and ${b} are equal and largest`;
  } else if (a === c && a > b) {
    return `${a} and ${c} are equal and largest`;
  } else {
    return `${b} and ${c} are equal and largest`;
  }
}
// console.log(findLargest(100, 19, 62));

// Task 9 — Calculate Grade
function calculateGrade(marks) {
  if (marks === 100) {
    return `A1 Grade`;
  } else if (marks >= 90) {
    return `A Grade`;
  } else if (marks >= 80) {
    return `B Grade`;
  } else if (marks >= 70) {
    return `C Grade`;
  } else if (marks >= 60) {
    return `D grade`;
  } else if (marks > 50) {
    return `E Grade`;
  } else if (marks === 50) {
    return `Just Passed`;
  } else {
    return `Fail`;
  }
}
// console.log(calculateGrade(65));

// Task 10 — Login Checker
function checkLogin(username, Password) {
  if (username === "admin" && Password === "admin123") {
    return `Login Successful`;
  } else {
    return `Invalid username or password`;
  }
}
// console.log(checkLogin("admin", "admin123"));

// Task 11 — Simple Calculator
function Calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    if (a > b) {
      return a - b;
    } else if (b > a) {
      return b - a;
    } else {
      return 0;
    }
  } else if (operator === "/") {
    if (a > b) {
      return a / b;
    } else if (b > a) {
      return b / a;
    } else {
      return 1;
    }
  } else if (operator === "*") {
    return a * b;
  } else {
    return `Invalid operator`;
  }
}
// console.log(Calculator(8, 9, "/"));

// Task 12 — Temperature Converter
function celsiusToFahrenheit(celsius) {
  let F = (celsius * 9) / 5 + 32;
  return F;
}
console.log(celsiusToFahrenheit(0));

function fahrenheitToCelsius(fahrenheit) {
  let C = ((fahrenheit - 32) * 5) / 9;
  return C;
}
console.log(fahrenheitToCelsius(32));

