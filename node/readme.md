# node源模块解读

## http-net-tcp 模块
	* init: http.createServer  => _http_server(258)的server ，继承 net(1160)的server, 继承 events事件机制
	* 请求： net 监听窗口时，已绑定，this._handle.onconnection = onconnection，运行了onconnection 函数，里边再触发connection事件(1549)，并且携带socket参数

	* http.createServer(fn)的fn, <==  _http_server : fn() <== server.on("request", fn) <== server.emit("request", req, res) <== parserOnIncoming()  <== parser.onIncoming <== connectionListener <== new Server(connectionListener) 

	* socket.parser = new parser   parser.onIncoming在监听到请求的情况下触发，从而发出响应 parserOnIncoming

	* http_common: parser[kOnHeadersComplete] = parserOnHeadersComplete;  ==> parser.onIncoming(parser.incoming, shouldKeepAlive);

	_http_server connectionListener{  httpSocketSetup(socket)  }

##疑问：
	* 监听端口时，addressType是什么
	* _http_server 里的socket.on('data', state.onData); 为什么没有生效  ,net 里边是怎么触发的
	* 请求方的端口？


## 
	* net 创建的server 没有data or message事件
##精巧
	* freelist