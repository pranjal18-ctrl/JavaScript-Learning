// Q.1) Create a variable of type string and try to add a number to it. Observe the output.

let a = "Pranjal"
let b = 18

console.log(a+b)

// Q.2) Use the typeof operator to find the datatype of the string in last question.

console.log(typeof (a+b))

// Q.3) Create a const object in JavaScript. Can you change it to hold a number later?

const demo = {
    name : "Pranjal",
    age : 18,
    section : "A"
}
// demo = 33   // This will throw an error because we cannot reassign a const variable to a different type.

// Q.4) Try to add a new key to the const object in problem 3 were you able to do it? 

// const object ke under likha hua key hota hai, usko change kar sakte hai but object ko reassign nahi kar sakte.
demo['roll number'] = 20250108  // It is a key-value pair in JavaScript object.  
console.log(demo) // Yes, we can add new keys to a const object. The object itself is mutable, but the reference to the object cannot be changed.

// Q.5) Write a JS program to create a word meaning dictionary of 5 words.

const dictionary = {
    "JavaScript" : "A programming language used to make web pages interactive.",
    "HTML" : "The standard markup language for creating web pages.",
    "CSS" : "A style sheet language used for describing the presentation of a document written in HTML or XML.",
    "Function" : "A block of code designed to perform a particular task.",
    "Variable" : "A storage location identified by a name that can hold data."
}
console.log(dictionary)   // Displaying the entire dictionary object.
console.log(dictionary["JavaScript"]) // Accessing the meaning of a word using its key.
console.log(dictionary["HTML"]) // Accessing the meaning of another word using its key.
console.log(dictionary.CSS) // isko hum aise bhi access kar sakte hai, dot notation ka use karke.