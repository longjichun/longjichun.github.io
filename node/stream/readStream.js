var fs = require("fs")
var readStream = fs.createReadStream('tsts.txt')
readStream.setEncoding('utf-8')
readStream.on("data",function(res,a){
	console.log(res.toString(),a,"--------------------------------------------------------------")
})
readStream.pipe(process.stdout)