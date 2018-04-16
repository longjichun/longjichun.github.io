var http = require("http")
module.exports = function(port,use,realName){
	http.createServer(function(req,res){
		use(req, res)
		res.end(realName)
	}).listen(port,function(){
		console.log(realName,' listen ',port)
	})
}