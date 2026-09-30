//----------------------------- For Loop -------------------------------//

// Print 1 to 10 numbers

/*
for(let i=0; i<=10; i++){
    console.log(i)
}
*/


// Print 10 to 1 numbers

/*
for(let i=10; i>=0; i--){
    console.log(i)
}
*/


// Sum of n numbers

/*
sum = 0
n = 10
for(let i=0; i<=n; i++){
    console.log(sum,"+",i,"=",sum+=i)
}
console.log("Sum of",n,"numbers is =",sum)
*/


// Find Factorial of n numbers

/*
factorial = 1
n = 10
for(let i=1; i<=n; i++){
    console.log("Factorial of",i,"is =",factorial *= i)
}
console.log("Factorial of",n,"numbers is =",factorial)
*/


// Print In Reverse Form

/*
string = 'JavaScript'
console.log("Before Reversing =",string)
ReverseString = ""    // Loop chalte time isme ek-ek variable add hota rhega
for(let i = (string.length-1); i>=0; i--){       // (string.length-1): Kyunki string me total 10 letters hain, aur indexing 0 se shuru hoti hai, isliye aakhri letter ka index 9 hua. Loop wahi se shuru hoga
    ReverseString += string[i]       // Loop ke andar, har step par string[i] se aakhri letter uthaya jata hai aur use ReverseString me pichle letters ke sath jod (+=) diya jata hai.
}
console.log("After Reversing =",ReverseString)
*/


// Print prime numbers => 2,3,5,7,11,13,17,.........

/*
for(let num=2; num<=100; num++){
    let isPrime = true                        
    for(let i=2; i<num; i++){                 
        if(num%i==0){
        isPrime = false
        break;
        }
    }
    if(isPrime){
        console.log(num)
    }
}
*/


// Print Star Pattern


let rows = 5;

for (let i = 1; i <= rows; i++) {
    let rowString = "";

    // Jitni row ka number hai, utne hi stars ek string me jodenge
    for (let j = 1; j <= i; j++) {
        rowString += "* ";
    }

    console.log(rowString);
}