
const NotificationService = require("./NotificationService");
const EmailClient = require("./EmailClient");

class EmailAdapter extends NotificationService {

    constructor() {
        super();
        this.email = new EmailClient();
    }

    send(recipient, message) {
        this.email.sendEmail(
            recipient,
            "Notification",
            message
        );
    }
}

module.exports = EmailAdapter;
