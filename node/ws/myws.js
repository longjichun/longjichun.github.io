var http = require("http")
const crypto = require('crypto');
var server = new http.createServer(function(req,res){
	res.end('hello world\n')
})

server.on("upgrade",function(req,socket,upgradeHead){
	var head = new Buffer(upgradeHead.length);
	upgradeHead.copy(head);
	var key = req.headers['sec-websocket-key'];
	var shasum = crypto.createHash('sha1')
	key = shasum.update(key+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest('base64');
	var headers = [
		'HTTP/1.1 101 Switching Protocols',
		'Upgrade: websocket',
		'Connection: Upgrade',
		'Sec-WebSocket-Accept: '+key,
	]
	socket.setNoDelay(true);
	socket.write(headers.concat('','','f').join('\r\n'));
	socket.on('data',function(message){
		console.log(message.toString())
	})
	
})

server.listen(3300)