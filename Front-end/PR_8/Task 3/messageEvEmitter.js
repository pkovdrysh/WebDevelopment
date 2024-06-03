const event = require('events');
const Message = require("./messageObject");
const MessageStorage = require("MessageStorage");

const storage = new MessageStorage();

class MessageEvEmitter extends event {
    constructor() {
        super();
        event.on("send", (messageObj) =>{
            try{
                if(messageObj instanceof Message){
                    MessageStorage.storage.push(messageObj);
                    storage.updateMessages();
                }
                else{
                    throw new TypeError("Wrong parameter`s type! (messageEvEmitter.js, 13)");
                }
            }
            catch (e){
                console.error(e);
            }
        });
    }
}
module.exports = MessageEvEmitter;
