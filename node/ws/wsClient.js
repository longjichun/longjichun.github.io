const WebSocket = require("ws")

var ws = new WebSocket("ws://localhost:8080")
ws.on("open",function(){
	console.log("connected succ")
})
ws.on("message", function(res){
	console.log(res)
})