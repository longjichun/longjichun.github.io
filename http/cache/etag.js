var hs = require("./httpserver.js")
hs(3004,function(req,res){

	res.setHeader('ETag','abcdf')
}, __filename.split("\\").pop())