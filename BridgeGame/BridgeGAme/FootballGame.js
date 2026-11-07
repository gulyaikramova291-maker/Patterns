const Game = require("./Game");
class FootballGame extends Game {
    createGame(){
        console.log("Creating Football Game...")
        this.developer.writeCode()
    }

}
module.exports=FootballGame