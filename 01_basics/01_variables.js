const accountId=12345
let accountEmail="varsha@gmail.com"
var accountPassword="12345"
accountCity="Delhi"
// accountId=3 on printing thisaccountPassword it will throw error beacuse const cannot be changed
// lets see what about other type
accountEmail="varshathakur@gmail.com"
accountPassword="9876"
accountCity="Ghaziabad"
console.table([accountId,accountEmail,accountPassword]);//use table so that we dont have to print three types
//In javascript we dont use var becoz of issue in block scope and functional scope so use only let
let accountState;
//if value dosnt assingned it refer as undefined