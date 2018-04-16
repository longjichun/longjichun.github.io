var hs = require("./httpserver.js")
	var d = new Date().getTime() + 60*1000
	var str = new Date(d).toUTCString()
hs(3002,function(req,res){

	// res.setHeader('Cache-Control','max-age=60')
	res.setHeader('Last-Modified',str)
	res.writeHead(304)
	res.end()
}, __filename.split("\\").pop())