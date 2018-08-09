// The Realtime client connection
var ortcClient;

// The Realtime channel
var chatChannel = "bri";

// The current user id
var myId = "ID_1";

// We start here ...
$(function() {
  connectToRealtime();
});

// Connect to the Realtime cluster
function connectToRealtime() {
  ortcClient = RealtimeMessaging.createClient();
  ortcClient.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');

  Log("Connecting to Realtime ...");

  //This is how to connect => ortcClient.connect('APP_ID', 'RANDOM_TOKEN');
  ortcClient.connect('BGmLm4', 'token');

  // we need to wait for the connection to complete, before we subscribe the channel
  ortcClient.onConnected = function(ortc) {
    $("#log").html("Connected");

    // subscribe the chat channel, the onChatMessage callback function will handle new messages
    ortcClient.subscribe(chatChannel, true, onChatMessage);
  }
}

// Handle a received chat message
function onChatMessage(ortc, channel, message) {
	var receivedMessage = JSON.parse(message);
  var msgAlign = (receivedMessage.id == myId ? "right" : "left");
  
  // format message to show on log
	var msgLog = "<div class='blockquote-" + msgAlign + "'>"
  msgLog += receivedMessage.text + "<br>";
	msgLog += "<span class='time'>" + receivedMessage.sentAt + "</span></div>"
  
  // add the message to the chat log
  Log(msgLog);

  // if there is message contain "BRI" text, call callBri function
  if (receivedMessage.text == "BRI"){
  	 callBri();
  }
  
}

//call BRI Function
function callBri() {
  $.ajax({url: "sample-api.php", success: function(result){
    
    var reply = {
    id: myId,
    text: result,
    sentAt: new Date().toLocaleTimeString()
    };

    ortcClient.send(chatChannel, JSON.stringify(reply));
    
    }});
}


// Adds text to the chat log
function Log(text) {
	$("#log").html(text + $("#log").html());
}
