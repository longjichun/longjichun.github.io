//master
const net = require('net');
const fork = require('child_process').fork;
 
var workers = [];
for (var i = 0; i < 4; i++) {
  workers.push(fork('./worker'));
}
var n = 1;
const server = net.createServer((socket) => {
	console.log(n++)
  var worker = workers.pop();
  worker.send({},socket)
  workers.unshift(worker)

}).listen(3000)