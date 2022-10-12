/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
 function onMessage(event) {
    var name = "";
  
    if (event.space.type == "DM") {
      name = "You";
    } else {
      name = event.user.displayName;
    }
    var message = name + " said \"" + event.message.text + "\"";
  
    return { "text": message };
  }
  
  /**
   * Responds to an ADDED_TO_SPACE event in Google Chat.
   *
   * @param {Object} event the event object from Google Chat
   */
  function onAddToSpace(event) {
    var message = "";
  
    if (event.space.singleUserBotDm) {
      message = "Thank you for adding me to a DM, " + event.user.displayName + "!";
    } else {
      message = "Thank you for adding me to " +
          (event.space.displayName ? event.space.displayName : "this chat");
    }
  
    if (event.message) {
      // Bot added through @mention.
      message = message + " and you said: \"" + event.message.text + "\"";
    }
  
    return { "text": message };
  }
  
  /**
   * Responds to a REMOVED_FROM_SPACE event in Google Chat.
   *
   * @param {Object} event the event object from Google Chat
   */
  function onRemoveFromSpace(event) {
    console.info("Bot removed from ",
        (event.space.name ? event.space.name : "this chat"));
  }
  
  