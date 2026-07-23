/* --------------- Starting Basics --------------- */

// Task 1: Create a Funtion name makeTea that prints "Making Green Tea"
function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("Green Tea");
// console.log(teaOrder);

// Task 2: Calling one function within another funtion and returning the result
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for Chai`;
  }
  return confirmOrder();
}
console.log(orderTea("Black Tea"));



