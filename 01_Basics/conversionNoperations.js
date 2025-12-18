// Conversion And Operations

// let score = "7vv"
let score = undefined

//console.log(typeof score);
// console.log(typeof (score));


let newScore = Number(score)


//console.log(typeof newScore)
//console.log(newScore)


/*
"33" -> 33
"33abc" - > NaN
null - > 0
undefined - > NaN
true - 1, false - 0

*/




/*
let isLogedIn = 1;
let booleanLogedIn = Boolean(isLogedIn);
// console.log(booleanLogedIn)
// console.log(typeof booleanLogedIn)

let number = 68;
let isnumber = String(number)  // 68 to "68"
console.log(typeof isnumber) // String
console.log(isnumber) //68
let typetoNumber = Number(isnumber)
console.log(typeof typetoNumber)
console.log(typetoNumber + 1)
*/

// ***************************** Operations *****************************

let val = 5
let negval = -5
console.log(negval)

console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 / 2)
console.log(2 % 2)
console.log(2 ** 3)


let fname = "Vineet";
let lname = " Gajadiwar"
let fullName = (fname + lname)
console.log(fullName)


// let num1 = num2 = num3 = 5
// console.log(num1)
// console.log(num2)
// console.log(num3)

// console.log("2" == 2)
// console.log(2 > "2");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0)



// Strict Check (not only check the value but also it check the data type off a value)

// === 
console.log("2" == 2) //f
console.log("2" === 2) // t