# express 学习笔记
## 静态文件部分
	``` app.use(express.static( path.join(__dirname, 'public') , {etag:true}) );```