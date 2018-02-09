var WebSocket = require("ws")

const ws = new WebSocket('ws://localhost:4444')
ws.on("open",function(){
	ws.send("connected")
})
ws.on("message",function(data){
	console.log("recevied:",data)
})
