var http = require("http")
var server = new http.Server()
server.on("upgrade",function(req,socket,head){
	console.log("succ")
	setInterval(()=>{
		socket.write("abc")
	},1000)
})

server.listen(3000)