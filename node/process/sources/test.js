console.log("被exec调用")
var fs = require("fs")
var json = {"type":typeof process.argv,"cont":process.argv}
fs.writeFile('out.json',JSON.stringify(json),"utf-8")
