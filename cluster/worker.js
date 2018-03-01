const net = require('net');
process.on('message', function (obj,socket) {
 start(socket);
});
 
var buf = 'hello Node.js';
var res = ['HTTP/1.1 200 OK','content-length:'+buf.length].join('\r\n')+'\r\n\r\n'+buf;
 
function start(socket) {
  console.log('got a connection on worker, pid = %d', process.pid);
  setTimeout(function(){
    socket.end(res);
  },1000)
}