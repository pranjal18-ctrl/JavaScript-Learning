let a = null   // Null
let b = undefined       // Undefined
let c = 42    // Number
let d = "Hello, World!"    // String
let e = true   // Boolean
let f = Symbol("unique")   // Symbol
let g = BigInt(9007199254740991) + BigInt(1123)  // BigInt

console.table({ a, b, c, d, e, f, g })

console.log("Type of a:", typeof a) 
console.log("Type of b:", typeof b)
console.log("Type of c:", typeof c) 
console.log("Type of d:", typeof d) 
console.log("Type of e:", typeof e)
console.log("Type of f:", typeof f) 
console.log("Type of g:", typeof g)