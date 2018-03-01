var http = require("http")
http.createServer((req,res)=>{
	console.log(req.url)
	res.end("our res")
}).listen(3000)