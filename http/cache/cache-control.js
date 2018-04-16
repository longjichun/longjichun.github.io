var hs = require("./httpserver.js")
hs(3001,function(req,res){
	var d = new Date().getTime() + 60*1000
	var str = new Date(d).toUTCString()
	res.setHeader('Cache-Control','max-age=60')
	res.setHeader('ETag','abcdf')
}, __filename.split("\\").pop())