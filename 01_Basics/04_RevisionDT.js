/*
Types of Data
1. Primitive -> String, Number, Boolean, null, undefined, Bigint ,Symbol
2. Non-Primitive -> class, objects, Arrays, functions/methods
*/


// object
/*
heros = {
    dabang : "SalmanKhan",
    ravan : "SharukKhan",
    dangal    : "am`irKhan"

}


movie = ["dabang","ravan","dangal"]

watch = function(){


}
*/



// Stack (Primitive Data Types) and Heap (Non-Primitive Data Types)



// let myYoutubeChannel = "vineet gajadiwar1"; // Stack

// let anotherChannel = myYoutubeChannel; // Stack
// anotherChannel = "Chichi"; // Stack
// console.log(myYoutubeChannel); // vineet gajadiwar1
// console.log(anotherChannel); // Chichi



let user1 = {
    name: "Vineet",
    accNo: 454,
    accType: "Saving",
    branch: "Aheri"

}

let user2 = user1;
console.log(user1 == user2)

user2.accNo = 143


console.log(user1)
console.log(user2)
console.log(user2)
// Here user1 one and user2 take the refferenc of same data 