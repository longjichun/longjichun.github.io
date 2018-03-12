var  http = require("http")
var request = require("request")
var fs = require("fs")
var cheerio =require("cheerio")

var fork = require("child_process").fork
var ws = fork("./w.js")
ws.send("abc")
ws.on("message",function(d){
	ws.exit()
	console.log('rec',d)
})

