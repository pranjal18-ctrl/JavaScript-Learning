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
for(let num=2; num<=100; num++){            // Yahaan num variable ko 2 se shuru kiya gaya hai, aur 100 tak loop chalega
    let isPrime = true                      // Yahaan isPrime variable ko true set kiya gaya hai, jisse hum check karenge ki num prime hai ya nahi  
    for(let i=2; i<num; i++){               // Yahaan i variable ko 2 se shuru kiya gaya hai, aur num ke number tak loop chalega   
        if(num%i==0){                       // Yahaan check kiya ja raha hai ki num ko i se divide karne par remainder 0 aata hai ya nahi, agar aata hai to iska matlab num prime nahi hai
        isPrime = false                     // Yahaan isPrime variable ko false set kiya gaya hai, jisse hum pata laga sakte hain ki num prime nahi hai
        break;                              // Yahaan break statement ka use kiya gaya hai, jisse loop turant terminate ho jaye aur aage ke iterations na chale
        }
    }
    if(isPrime){                            // Yahaan check kiya ja raha hai ki isPrime variable true hai ya nahi, agar true hai to iska matlab num prime hai
        console.log(num)                    // Yahaan num variable ko print kiya gaya hai, jisse hum prime numbers dekh sakte hain
    }
}
*/


// Print Star Pattern

/*
let rows = 5;                // Yahaan rows variable me kitni rows print karni hai, uska number diya gaya hai

for (let i = 1; i <= rows; i++) {           // Yahaan i variable ko 1 se shuru kiya gaya hai, aur rows ke number tak loop chalega
    let rowString = "";                     // Yahaan rowString variable me har row ke liye ek string store ki jayegi

    // Jitni row ka number hai, utne hi stars ek string me jodenge
    for (let j = 1; j <= i; j++) {           // Yahaan j variable ko 1 se shuru kiya gaya hai, aur i ke number tak loop chalega
        rowString += "* ";                   // Yahaan rowString variable me har star ke baad ek space add kiya gaya hai
    }

    console.log(rowString);
}
*/


//-------------------------------------------------- For-In Loop --------------------------------------------------//

// Print all properties of an object

/*
let person = {                 // for-in loop m pahele ek object banaya gaya hai, jisme name, age, gender aur hobby ke properties hain
    name: "Pranjal",
    age: 19,
    gender: "Male",
    hobby: "Coding",
}
for(let i in person){          // Yahaan i variable ko in se shuru kiya gaya hai, aur person ke object tak loop chalega ("in" means "inside" or person means "object")
    console.log(i)             // ye i variable sirf object jo ki person name se defined hai usme bss properties ke name ko print karega unki values ko print nahi karega
}
for(let i in person){
    console.log(i,":",person[i])            // Yahaan i variable ke sath person[i] ka use kiya gaya hai, jisse hum object ke properties ke values ko print kar sakte hain
}
*/


// ------------------------------------ For-Of Loop ------------------------------------//

// Print all literables of a string


let string = "JavaScript"
let string2 = "Python"
for(let i of string){          // ye for-of ka loop sirf string ke andar ke letters ko print karega, aur ye string ke andar ke letters ko ek ek karke print karega
    console.log(i)       
}
for(let i of string2){          // ye for-of ka loop sirf string2 ke andar ke letters ko print karega, aur ye string2 ke andar ke letters ko ek ek karke print karega
    console.log(i)       
}