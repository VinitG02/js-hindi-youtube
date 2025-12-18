// Here we see the operations of a string 


const name = "vineet"
const repo = 5;
console.log(name + repo + "Value")
console.log(`My Name is ${name} I github my repos are ${repo}`);

const gamespace = new String("VineetGajadiwar");
console.log(gamespace)

//String. Methods
console.log(gamespace.toUpperCase())

console.log(gamespace.charAt(0))
console.log(gamespace.indexOf('r'))
console.log(gamespace.trim())
console.log(gamespace.length)
// console.log(gamespace.__proto__) 

// const substring = console.log(gamespace.substring(3,14))  

// const anotherString = gamespace.slice(0,9)
const anotherString = gamespace.slice(-15, -9)
console.log(anotherString)

//replace
const url = "https://www.facebooks.com vinit";
console.log(url.replace('s', ''))

// is any value is present or not
console.log(url.includes('viniddt'))