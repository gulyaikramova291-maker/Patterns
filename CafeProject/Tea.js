const Drink = require("./Drink");

class Tea extends Drink {
    name() {
        return "Чай";
    }
}

module.exports = Tea;