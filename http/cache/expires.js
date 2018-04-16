var hs = require("./httpserver.js")
hs(3000,function(req,res){
	var d = new Date().getTime() + 60*1000
	var str = new Date(d).toUTCString()
	res.setHeader('Expires',str)
}, __filename.split("\\").pop())