// Подключаем устройства
const Light = require("./Light");
const AirConditioner = require("./AirConditioner");

// Подключаем команды
const LightOnCommand = require("./LightOnCommand");
const LightOffCommand = require("./LightOffCommand");

const AirConditionerOnCommand = require("./AirConditionerOnCommand");
const AirConditionerOffCommand = require("./AirConditionerOffCommand");

// Подключаем пульт
const RemoteControl = require("./RemoteControl");


// Создаём устройства
const light = new Light();
const airConditioner = new AirConditioner();


// Создаём команды
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const acOn = new AirConditionerOnCommand(airConditioner);
const acOff = new AirConditionerOffCommand(airConditioner);


// Создаём пульт
const remote = new RemoteControl();


// Включаем свет
remote.setCommand(lightOn);
remote.pressButton();

// Выключаем свет
remote.setCommand(lightOff);
remote.pressButton();

// Включаем кондиционер
remote.setCommand(acOn);
remote.pressButton();

// Выключаем кондиционер
remote.setCommand(acOff);
remote.pressButton();