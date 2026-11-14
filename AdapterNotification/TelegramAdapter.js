
const NotificationService = require("./NotificationService");
const TelegramClient = require("./TelegramClient");

class TelegramAdapter extends NotificationService {

    constructor() {
        super();
        this.telegram = new TelegramClient();
    }

    send(recipient, message) {
        this.telegram.sendTelegramMessage(recipient, message);
    }
}

module.exports = TelegramAdapter;
