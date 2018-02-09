const net  = require("net");
const client = net.createConnection(3030, '127.0.0.1', function(){
	client.write("ff")
	setTimeout(client.write.bind(this,"ff2"),1000)
})
client.on("data",(data) => {
	console.log(data.toString())
	setTimeout(()=>{
		client.end()
	},2000)
})
