//------------------------------------ While loop -------------------------------------//

// print numbers from 0 to 10 using while loop
/*
let n = 10
let i = 0
while(i<=n){                      // while loop m pahele condition check hoti hai phir loop chalta hai..
    console.log(i)
    i++
}
*/

// Print numbers from 10 to 0 using while loop
/*
let n = 10
let i = 10
while(i>=0){                      
    console.log(i)
    i--
}
*/

// Sum of n numbers using while loop
/*
sum = 0
n = 1
while(n<=10){                      
    console.log(sum,"+",n,"=",sum+=n)
    n++
}
*/

// if-else using while loop
/*
let n = 0
while(n<=10){                      
    if(n%2==0){
        console.log(n,"is even")
    }else{
        console.log(n,"is odd")
    }
    n++
}
*/


//------------------------------------ Do-While loop -------------------------------------//

// print numbers from 0 to 10 using do-while loop
/*
let n = 10
let i = 0
do{                                // do-while loop sirf condition true karta hai jisse ek baar loop chalega hi phir condition check hoti hai..
    console.log(i)
    i++
}while(i<=n)
*/


// Difference between while loop and do-while loop is that in while loop condition check hoti hai phir loop chalta hai aur do-while loop me pehle loop chalta hai phir condition check hoti hai..
/*
let n = 5
let i = 10
do{                                 // yaha i ki value n se badi hai phir bhi loop chalega aur uske baad condition false dekh ke isko rok diya jayega..
    console.log(i)
    i++
}while(i<=0)
*/


// Print numbers from 10 to 0 using do-while loop
/*
let n = 10
let i = 10
do{                                 
    console.log(i)
    i--
}while(i>=0)
*/


// Sum of n numbers using do-while loop
/*
sum = 0
n = 1
do{                                 
    console.log(sum,"+",n,"=",sum+=n)
    n++
}while(n<=10)
*/


// if-else using do-while loop
/*
let n = 0
do{                                 
    if(n%2==0){
        console.log(n,"is even")
    }else{
        console.log(n,"is odd")
    }
    n++
}while(n<=10)
*/