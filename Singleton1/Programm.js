const ProgrammLogger = require("./ProgrammLogger")
// Первый объект
const programmLogger = ProgrammLogger.getProgrammLogger()

programmLogger.addLogInfo("Starting math processing")
programmLogger.addLogInfo("Math processing success")
programmLogger.showLogInfo()

// Второй объект
const programmLogger2 = ProgrammLogger.getProgrammLogger()

programmLogger2.showLogInfo()

// Проверяем, одинаковые ли объекты
console.log(programmLogger === programmLogger2)