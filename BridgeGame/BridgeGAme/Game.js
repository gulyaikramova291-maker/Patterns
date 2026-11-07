class Game {
    constructor(developer) {
        this.developer = developer;
    }

    createGame() {
        throw new Error("Метод createGame() должен быть реализован");
    }
}

module.exports = Game;