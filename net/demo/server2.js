var net = require("net")
const binding = process.binding('http_parser');
const HTTPParser = binding.HTTPParser;

var server = new net.Server({},function(socket){
	console.log("new")
	socket.setTimeout(30000);
	socket.on("timeout",function(){
		console.log("timeout")
	})
	var parser = new HTTPParser(HTTPParser.REQUEST);
	parser[1] = function(a,b,c){console.log("parserOnHeadersComplete",a,b,c)};
	parser[3] = function(a,b){console.log("parserOnMessageComplete")};

	
	parser.reinitialize(HTTPParser.REQUEST);
	parser.socket = socket
	socket.parser = parser;

	socket.on('data',function(res){
		console.log('receivedData:',res.toString())
	})

	var external = socket._handle._externalStream;
	if (!socket._handle._consumed && external) {
	    parser._consumed = true;
	    socket._handle._consumed = true;
	    parser.consume(external);
	}

	socket.on('error',function(err){
		console.log(err)
	})

	socket.end(`HTTP/2.0 200 OK
				Date: Thu, 01 Feb 2018 06:27:29 GMT
				Connection: keep-alive
				Content-Length: 5

				300喊`)
})
server.listen(3030)