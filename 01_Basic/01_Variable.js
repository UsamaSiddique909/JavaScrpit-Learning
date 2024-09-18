
const accountId = 144553
let accountEmail = "usamasiddique909@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "usama@gmail.com"
accountPassword = "21212121"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
