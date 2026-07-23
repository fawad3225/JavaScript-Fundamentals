/*---------------- Arrow function ------------*/
const subtract = (a, b) => a - b;
// console.log(subtract(10, 5));

// Task 1: write an Arrow function name "calculateTotal" that takes two parameters: Price and Quantity. Function should return totalCost by multiplying price and quantity .
const calculateTotal = (price, quantity) => {
  let totalCost = price * quantity;
  return `Rs. ${totalCost}`;
};
// console.log(calculateTotal(200, 6));

// Task 2: write a function name "processedTeaOrder" that takes another function " makesTea" as parameter and calls it with an argument "earl grey". Return the result of calling makesTea
function makesTea(typeofTea) {
  return `Make Tea : ${typeofTea}`;
}
function processedTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processedTeaOrder(makesTea);
// console.log(order);

// Task 3: write a function named "createTeaMaker" that returns another function. The returned function should take one parameter 'teaType' and return a message like 'Making Green Tea'.


function createTeaMaker() {
    return function(teaType) {
      return `Making ${teaType}`;
    }
}
let TeaMaker = createTeaMaker();
console.log(TeaMaker("Green tea"));
