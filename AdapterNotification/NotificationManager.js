class NotificationManager {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    sendNotification(recipient, message) {
        this.notificationService.send(recipient, message);
    }
}
module.exports = NotificationManager;