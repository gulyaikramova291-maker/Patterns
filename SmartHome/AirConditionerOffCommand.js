const Command = require("./Command")
class AirConditionerOffCommand extends Command {

    constructor(airConditioner) {
        super()
        this.airConditioner = airConditioner;
    }
    execute() {
        this.airConditioner.turnOff()
    }

}


module.exports = AirConditionerOffCommand