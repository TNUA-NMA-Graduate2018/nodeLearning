var mosca = require('mosca')

var settings = {
	//改成自己想要的port
  port: 15003
};

//here we start mosca
var server = new mosca.Server(settings);
server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}

// fired when a client is connected
server.on('clientConnected', function(client) {
  console.log('client connected: ', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published : ', (packet.payload).toString());
});

// fired when a client subscribes to a topic
server.on('subscribed', function(topic, client) {
  console.log('subscribed : ', topic);
});

// fired when a client subscribes to a topic
server.on('unsubscribed', function(topic, client) {
  console.log('unsubscribed : ', topic);
});

// fired when a client is disconnecting
server.on('clientDisconnecting', function(client) {
  console.log('clientDisconnecting : ', client.id);
});

// fired when a client is disconnected
server.on('clientDisconnected', function(client) {
  console.log('clientDisconnected : ', client.id);
});

