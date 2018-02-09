var net = require('net')
var HOST = '127.0.0.1';
var PORT = 8899; // 定義 Port
//建立 net.createServer() 的物件

const fs = require('fs');

var server = net.createServer(function (socket) {

  // data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
  socket.on('data', function (data) {

    // write event: 傳輸資料的事件
    socket.write('hi', function () {
      console.log('server:收到 client端 傳輸資料為' + data + '回應 hi')
    })
    fs.appendFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The "data" was appended to file!');
});

  })
})


server.listen(PORT, HOST); 
