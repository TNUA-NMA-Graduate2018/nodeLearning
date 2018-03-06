var net = require('net');

var server = net.createServer((socket) => {
    //加入一个标志
    //加入到客户列表中
    var name = clients.add(socket);

    //接收客户发过来的信息
    socket.on('data', function(data) {
        console.log(data);
        //发送给所有人
        clients.sendAll(socket,data);
    });
    //客户关闭了连接
    socket.on('close', function(data) {
        console.log('client end' + socket.remoteAddress + ' ' + socket.remotePort);
        //删除客户
        clients.del(socket);
        //发送给所有人
        clients.sendAll(socket, ' online: ' + clients.length());

    });
    console.log('online:'+ clients.length() );


    socket.write(' welcome' + name + '!\n' );
    clients.sendAll(socket, 'online: ' + clients.length());
}).on('error', (err) => {
  // handle errors here
  throw err;
});

clients = new Object();
clients.list = [];
//添加客户端到客户列表
/*
    socket  当前的连接
*/
clients.add = function(socket){
    socket.name = socket.remoteAddress + ':' + socket.remotePort;
    this.list.push(socket);
    return socket.name;
}
//从客户端列表删除
/*
    socket  当前的socket
*/
clients.del = function(socket){
    console.log('delete');

    for(var i=0 ; i < this.list.length ; i++){
        if(socket == this.list[i]){
            console.log('deleted');

            this.list.splice(i,1);
        }
    }
}
//把信息发给全部人
/*
    socket 当前的连接
    data   要发送的数据
*/
clients.sendAll = function(socket,data){
    console.log('sendtoall');
    for(var i=0 ; i < this.list.length ; i++){
        if(socket !== this.list[i]){
            var o = this.list[i];
            //检查socket是否可以写
            if (o.writable) {
                console.log( o.name);
                o.write('-----\n' + '\n' + socket.name + ':\n');
                o.write(data);
                o.write('-----');
            } else {
                console.log('socket lost' + o.name);
                //socket断开了什么的,就不能发送啦,需要删除这个连接
                this.del(o);
            }

        }

    }
}
clients.length = function(){
    return this.list.length;
}

//开启聊天服务器~~
server.listen(({
  host: 'localhost',
  port:30001,
  exclusive: true
}));
