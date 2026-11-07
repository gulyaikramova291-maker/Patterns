const JavaDeveloper = require("./JavaDeveloper");
const CppDeveloper = require("./CppDeveloper");
const RacingGame = require("./RacingGame");
const FootballGame = require("./FootballGame");


const javaDeveloper = new JavaDeveloper();
const racingGame = new RacingGame(javaDeveloper);

racingGame.createGame();

console.log("----------------------");

const cppDeveloper = new CppDeveloper();
const racingGame2 = new RacingGame(cppDeveloper);

racingGame2.createGame();

console.log("----------------------");

const footballGame = new FootballGame(javaDeveloper);

footballGame.createGame();

console.log("----------------------");

const footballGame2 = new FootballGame(cppDeveloper);

footballGame2.createGame();