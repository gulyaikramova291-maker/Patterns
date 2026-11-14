const NotificationService=require("./NotificationService");
class SmsNotificationService extends NotificationService{
    send(recipient,message){
        console.log(`SMS to ${recipient}: ${message}`)
    }
}
module.exports=SmsNotificationService;