var net = require('net')
var HOST = '127.0.0.1';
var PORT = 30003; // 定義 Port
//建立 net.createServer() 的物件


var server = net.createServer(function (socket) {

  // data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
  socket.on('data', function (data) {

    // write event: 傳輸資料的事件



  })
})


server.listen(PORT, HOST);
