
const NotificationManager = require("./NotificationManager");

const SmsNotificationService = require("./SmsNotificationService");
const TelegramAdapter = require("./TelegramAdapter");
const EmailAdapter = require("./EmailAdapter");

// SMS
const sms = new SmsNotificationService();
const smsManager = new NotificationManager(sms);

smsManager.sendNotification(
    "+998901234567",
    "Hello! This is SMS notification."
);

// Telegram
const telegram = new TelegramAdapter();
const telegramManager = new NotificationManager(telegram);

telegramManager.sendNotification(
    "123456789",
    "Hello! This is Telegram notification."
);

// Email
const email = new EmailAdapter();
const emailManager = new NotificationManager(email);

emailManager.sendNotification(
    "example@gmail.com",
    "Hello! This is Email notification."
);
