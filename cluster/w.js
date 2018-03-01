var request = require("request")
var cheerio = require("cheerio")
var fs = require("fs")
var pid = process.pid
process.on("message",function(data){
	let src="http://cc.comcs"
	let r = request( src )
	let stream = r.pipe(fs.createWriteStream('img'))
	stream.on("close",function(){
		process.send(pid)
	})
})

process.on("exit",function(){
	process.send("fail")
})