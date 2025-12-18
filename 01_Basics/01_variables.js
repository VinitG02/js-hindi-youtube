const accountId = 144553;
let accountEmail = "vineet@gmail.com";
var accountPassword = "12345"  // Dont use var-> becz of issue in block and functional scope
accountCity = "Aheri";
let accountState;


// accountId = 33; // const cant change the value
accountEmail = "vg@vg.com"
accountPassword = "54321"
accountCity = "pune"

console.log(accountId);
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState);


console.table([accountId, accountEmail, accountPassword, accountCity])