class TelegramClient{
    sendTelegramMessage(chatId,text){
        console.log(`Telegram to ${chatId}: ${text}`)
    }
}
module.exports=TelegramClient;