const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const othernumber = 65.43;
console.log(othernumber.toPrecision(1)) // 

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-In"))


// *******************Math*******************
/*
console.log(Math.abs(-45)) //remove -
console.log(Math.round(45.4)) // after . value is >5 46 else 45
console.log(Math.floor(53.4))
console.log(Math.ceil(53.6))
console.log(Math.max(4,3,5,6,8))
console.log(Math.min(4,3,5,6,8))*/

//******Math.random******
console.log(Math.random()) //0.40724666826202505
console.log((Math.random() * 10) + 1) // 4.831131911245174

console.log(Math.floor(Math.random() * 100) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))