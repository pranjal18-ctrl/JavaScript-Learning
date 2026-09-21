let score = "Pranjal"

console.log(typeof score) // string

let valueInNumber = Number(score) // Convert string to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN (Not a Number)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Pranjal"

let booleanIsLoggedIn = Boolean(isLoggedIn) // Convert string to boolean
console.log(booleanIsLoggedIn) // true

// 1 => true; 0 => false
// "" => false; "Pranjal" => true
// null => false; undefined => false

let someNumber = 33

let stringNumber = String(someNumber) // Convert number to string
console.log(typeof stringNumber) // string
console.log(stringNumber) // "33"