const Game = require("./Game");

class RacingGame extends Game {
    createGame() {
        console.log("Creating Racing Game...");
        this.developer.writeCode();
    }
}

module.exports = RacingGame;