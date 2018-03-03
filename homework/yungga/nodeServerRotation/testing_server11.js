net = require('net');
var clients = [];
var rotation='';
var disconnected=0;

net.createServer(function (socket) {

  socket.name = socket.remoteAddress + ":" + socket.remotePort
  clients.push(socket);

  socket.write("Welcome " + socket.name + "\n");
  broadcast(socket.name + " joined the chat\n", socket);

  socket.on('data', function (data) {
    //broadcast(socket.name + "> " + data, socket);
    if(data!='\n'){
    rotation=data;
    broadcast(rotation,socket);
}
  });


  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + " left the chat.\n");
    disconnected=1;
  });

  function broadcast(message, sender) {

    clients.forEach(function (client) {
      if (client === sender) return;
      if(disconnected===1) return;
      client.write(message);
    });
    process.stdout.write(message);
  }

}).listen(30011);


// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 10004\n");
