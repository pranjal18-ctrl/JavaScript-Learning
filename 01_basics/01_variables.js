// const accountId = 123456
// let accountEmail = "pranjal123@gmail.com"
// var accountPassword = "password123"
// accountCity = "Alwar"

// // accountId = 654321   // Not Allowed because accountId is a constant

// /* Prefer not to use var and declare variables without a keyword. Use const and let instead.
//    Beacause var and variables declared without a keyword have function scope, which can lead to unexpected behavior in larger codebases.
//    const and let have block scope, which is more predictable and easier to manage. */

// accountEmail = "newemail@gmail.com" // Allowed because accountEmail is a variable declared with let
// accountPassword = "newpassword123" // Allowed because accountPassword is a variable declared with var
// accountCity = "New City" // Allowed because accountCity is a variable declared without a keyword

// console.log(accountId);

// console.table([accountId, accountEmail, accountPassword, accountCity]); // Displaying the values of the variables in a tabular format

var a = 10
var a = 20
let b = 30
// let b = 40 // Not Allowed because b is already declared with let
b = 50 // Allowed because b is a variable declared with let
const c = 60
// c = 70 // Not Allowed because c is a constant

{
   var a = 80
   console.log(a) // 80
   let b = 90
   console.log(b) // 90
   const c = 100
   console.log(c) // 100

   console.table([a, b, c]) // Displaying the values of the variables in a tabular format
}

console.log(a, b, c)
console.table([a, b, c]) // Displaying the values of the variables in a tabular format