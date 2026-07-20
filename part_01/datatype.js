// This is single line comment ----- ctrl slash
/* This is multiple line comment and in todays lecture we will discuss and study different datatypes in JavaScript, That are discussed below*/

/* Data types are divided into 
   1. Primitive
   2. Non-primitive
*/
//1. Primitive Data types

let age = 22;         // Number
let isStudent = true; // Boolean
let x = null;         // Null
let y = undefined;    // Undefined
let big = 123n;       // Big int
// String
let userName = "Fawad"
console.log("Hello" + " " + userName + "!");  //Old way of writing code
console.log(`Hello ${userName}!`)             //New way of writing code
// Symbols------guarantees the uniqueness on the page
let sm1 = Symbol(2)
let sm2 = Symbol(2)
console.log(sm1 == sm2)  // false because internally they are not equal

/*--------------------------------------------------------------------------------*/

// 2. Non-primitive types
// Objects
let obj = {
   firstName : "Fawad",
   lastName : "Khan"
}
console.log(obj)
console.log(typeof obj)
console.log(obj.firstName)

