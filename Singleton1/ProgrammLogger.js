class ProgrammLogger {
    static programmLogger = null;
    static logFile = "This is log file.\n"

    static getProgrammLogger() {
        if (ProgrammLogger.programmLogger === null) {
            ProgrammLogger.programmLogger = new ProgrammLogger()
        }
        return ProgrammLogger.programmLogger
    }
    addLogInfo(info) {
        ProgrammLogger.logFile += info + "\n"
    }
    showLogInfo() {
    console.log(ProgrammLogger.logFile)
    }

}
module.exports = ProgrammLogger