//---------------------------- Arithmetic operators ---------------------------------//

// let a = 20;
// let b = 2;
// console.log("a = " , a);
// console.log("b = " , b);
// console.log("a+b = " , (a + b));
// console.log("a-b = " , (a - b));
// console.log("a*b = " , (a * b));
// console.log("a/b = " , (a / b));   // gives quotient
// console.log("a%b = " , (a % b));   // gives remainder
// console.log("a**b = " , (a**b));
// console.log("a++ = " , (a++));      // firstly print the value (20) then increment by 1 in that value (21)
// console.log("++a = " , (++a));      // firstly increment by 1 (21+1) in value then print the value (22)
// console.log("a-- = " , (a--));      // firstly print the value (22) then decrement by 1 (21)
// console.log("--a = " , (--a));      // firstly decrement the value (21-1) then print the value (20)


//------------------------------- Assignment Operators ---------------------------------//

// let c = 8
// console.log("c = ", c)
// c += 1
// console.log("c is now = ", c);
// c -= 2
// console.log("c is now = ", c);
// c *= 3
// console.log("c is now = ", c);
// c /= 4
// console.log("c is now = ", c);
// c %= 5
// console.log("c is now = ", c);
// c **= 7
// console.log("c is now = ", c);


//------------------------------ Comparison Operator ----------------------------------//

// let p = 10
// let q = "30"

// console.log("p==q = ", p==q)      // this will check only equal values
// console.log("p!=q = ", p!=q)
// console.log("p===q = ", p===q)    // this will check equal values or also their type 
// console.log("p!==q = ", p!==q)
// console.log("p>q = ", p>q)
// console.log("p<q = ", p<q)
// console.log("p>=q = ", p>=q)
// console.log("p<=q = ", p<=q)
// console.log("p?q = ", p?q:20)   // this is ternary operator. It chack if p is truthy then print value of q, or if not so print value of ternary.
/*
   condition of truthy : 1) True, 2) Non zero values, 3) non empty strings, 4) array, object or function
   condition of not truthy : 1) False, 2) zero values, 3) empty string
*/

//--------------------------------- Logic Operators ------------------------------------//

let m = 8
let n = 5

console.log(m!=n && m<=n)    // In the [&&] logical operator, it checks both condition and then print true or false.
/*
   conditions : 1) true && true = true
                2) true && false = false
                3) false && true = false
                4) false && false = false
*/
console.log(m==n || m!=n)  // In the [||] logical operator, it checks only one codition then print true or false but their one thing is that, it gives most priority to the "true".
/*
    conditions : 1) true || true = true 
                 2) true || false = true 
                 3) false || true = true
                 4) false || false = false
*/
console.log(!false)  // It is a not operator in JS. It change the [false into true] or [true into false]