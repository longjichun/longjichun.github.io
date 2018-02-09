const net = require("net");
const binding = process.binding('http_parser');
const HTTPParser = binding.HTTPParser;


const server = net.createServer( (socket) => {
	var parser = new HTTPParser(HTTPParser.REQUEST);
	console.dir(parser)
	parser[1] = function(a,b){console.log("parserOnHeadersComplete",a,b)};
	parser[3] = function(a,b){console.log("parserOnMessageComplete",a,b)};
	parser.reinitialize(HTTPParser.REQUEST);
	socket.on('end',() => {
		console.log("client disconnected")
	})
	socket.on('data',(res) => {
		console.log("socket.onData",res.toString())
	})
	socket.on("connect",(res)=>{
		console.log("con",res)
	})

	parser.socket = socket
	socket.parser = parser;
	socket.write("abcd")
	socket.write("\nefg")
	setTimeout(()=>{
		socket.write("\nefg")
	},1000)

})

server.on("connection",function(socket,x){
	// console.log(x)
	// console.log("new socket")

	// server.getConnections((err,count)=>{
	// 	console.log('socket count:',count)
	// })
})

server.on('error',function(){

})

server.listen(3030,() => {
	console.log(server.address())
	console.log("server start")
})
