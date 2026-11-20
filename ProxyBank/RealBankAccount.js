
const BankAccount = require("./BankAccount");

class RealBankAccount extends BankAccount {
    constructor(balance) {
        super();
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостаточно средств");
            return;
        }

        this.balance -= amount;

        console.log(`Снято: ${amount} сум`);
        console.log(`Остаток: ${this.balance} сум`);
    }
}

module.exports = RealBankAccount;
