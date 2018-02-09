process.on("message",function(data){
	console.log("【child_process2 get parent msg】：",data)
})

setTimeout(function(){
	process.send("hello i am child_process2 you send me arg is: "+JSON.stringify(process.argv))
},4000)