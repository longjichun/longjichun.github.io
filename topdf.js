var pdf = require('pdfkit');  
var fs = require('fs');  
var pdfo = new pdf();  
 
fs.readFile("./index.html",function(err,doc){
	pdfo.pipe(fs.createWriteStream('Aim.pdf'));  
	pdfo.text(doc,0,0);  
	pdfo.end();  
})