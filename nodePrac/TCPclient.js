var net = require('net'); // 引入網路 (Net) 模組
var HOST = '192.168.43.110';
var PORT = 8877;
var file_path = "writeFileSync.txt";
var fs = require('fs');




var client = net.connect(PORT, HOST, function(){
  console.log('connecting...');

  // 向伺服器端發送資料，該方法其實就是 socket.write() 方法，因為 client 參數就是一個通訊端的物件


});

// connect event : 與 server端 連線成功時的事件
client.on('connect', function (data) {
  console.log('client端：與 server端 連線成功，可以開始傳輸資料')
})
// write event: 傳輸資料的事件
client.write('hello！', function () {
  console.log('client端：開始傳輸資料，傳輸的資料為 hello!')
  if(fs.existsSync(file_path)){
  var file_contents_pre = fs.readFileSync(file_path, 'utf-8');
  console.info(file_contents_pre); // 輸出原本檔案的內容

  fs.appendFileSync(file_path, 'hello!'+'\n'); // 使用同步方式，新增內容至檔案的最後
}else{
  console.log(file_path + ' 檔案不存在。');
}
})

// data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
client.on('data', function (data) {

  console.log('client端：收到 server端 傳輸資料為 ' + data.toString())
  if(fs.existsSync(file_path)){
  var file_contents_pre = fs.readFileSync(file_path, 'utf-8');
  console.info(file_contents_pre); // 輸出原本檔案的內容

  fs.appendFileSync(file_path, data.toString()+'\n'); // 使用同步方式，新增內容至檔案的最後

}else{
  console.log(file_path + ' 檔案不存在。');
}

  //結束 client 端 連線
  client.end()
})
