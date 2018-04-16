##

* 04-06； 拉取javbus上的magnet列表时，将返回内容写入本地文本会出现乱码，那是因为返回的内容是以压缩的方式返回的，在请求头中将			'accept-encoding':'gzip, deflate, br', 注释即可。
* 04-07 获取运行时的参数，例如命令：'node app a b'，process.argv则根据命令使用空格进行split形成数组，属于同步