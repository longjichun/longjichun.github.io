process.on("message",function(data){
	console.log("【child_process1 get parent msg】：",data)
})

setTimeout(function(){
	process.send("hello i am child_process1 you send me arg is : "+JSON.stringify(process.argv))
},2000)