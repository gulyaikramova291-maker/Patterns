const BankAccountProxy = require("./BankAccountProxy");

console.log("BANK APPLICATION");

console.log("\n User 1");

const account1 = new BankAccountProxy(true, 1000000);
account1.withdraw(300000);

console.log("\n User 2");

const account2 = new BankAccountProxy(false, 1000000);
account2.withdraw(500000);

console.log("\n END");