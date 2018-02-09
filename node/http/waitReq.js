var http = require("http")
http.createServer((req,res)=>{
	console.log(req.agent)
	res.end("our res")
}).listen(3000)