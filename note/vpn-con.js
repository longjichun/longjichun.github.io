var http = require("http")
var mysql = require('mysql');
const config = {
	host:"127.0.0.1",
	user:"root",
	password:"",
	database:"radius",
	port:"3306"
}
var pool = mysql.createPool(config,function(err,res){
	console.log(err,res)
});


http.createServer(function(req,res){
	var url = req.url.split("?");
	res.setHeader("content-type","application/json;utf-8")
	if( url.shift() == '/get/vpn' ) {
		var key_val_name = url.shift();
		if( ~key_val_name.indexOf("name=") ) {
			var _name = key_val_name.replace("name=","");
			_name = _name.replace(/\s/g,"");
			pool.query("select * from radcheck where username= '"+_name+"'",function(err,result){
				if(null) {
					res.end(JSON.stringify({"errcode":1,"info":"sql查询vpn错误"}))
				} else {
					res.end(JSON.stringify({"errcode":0,"info":result}))
				}
			})			
		} else {
			res.end("forbidden");
		}
	} else {
		res.end("forbidden");
	}
}).listen(3040,function(){
	console.log("listen(3040)")
})