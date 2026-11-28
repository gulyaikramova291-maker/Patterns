const Command = require("./Command");
class AirConditionerOnCommand extends Command {
    constructor(airConditioner) {
        super();
        this.airConditioner = airConditioner;
    }
     execute() {
        this.airConditioner.turnOn();
    }

}
module.exports = AirConditionerOnCommand;