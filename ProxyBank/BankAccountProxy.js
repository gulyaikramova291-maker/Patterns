const BankAccount = require("./BankAccount");
const RealBankAccount = require("./RealBankAccount");

class BankAccountProxy extends BankAccount{
    constructor(isLoggedIn,balance){
        super()
        this.isLoggedIn=isLoggedIn
        this.realAccount=new RealBankAccount(balance)
    }
    withdraw(amount){
        console.log("Попытка снять деньги")
        if(!this.isLoggedIn){
            console.log("Доступ запрещён! Пользователь не авторизован.")
            return
        }
        console.log("Пользователь авторизован.");
        this.realAccount.withdraw(amount);
    }
}
module.exports=BankAccountProxy