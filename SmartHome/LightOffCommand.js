const Command = require("./Command")
class LightOffCommand extends Command {

    constructor(light) {
        super()
        this.light = light
    }
        execute() {
        this.light.turnOff()
    }

}
module.exports = LightOffCommand