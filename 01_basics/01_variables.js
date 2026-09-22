const accountId = 144553
let accountEmail = 'maks@gmail.com'
var accountPassword = '12345'
accountCity = 'Delhi'

// accountId = 2 not allowed

/*
prefer not to use var because of issue of block scope and functional scope
*/

accountEmail = 'mks@mk.com'
accountPassword = '21212121'
accountCity= 'Bengaluru'

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity])
