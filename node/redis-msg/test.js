var fs = require("fs")
var readStream = fs.createReadStream('text.txt')

var writeStream = fs.createWriteStream('in.txt')
readStream.pipe(writeStream)
writeStream.write('feifei')