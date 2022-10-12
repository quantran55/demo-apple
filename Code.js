function onMessage(event) {
    var message = "You just said: \"" + event.message.text + "\"";
    return { "text": message };
}