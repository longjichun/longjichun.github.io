#todo
  vue 组件重读 
  node event

#log
	##12/01
		* 长影评审核，需要将修改的部分标识出来，实现方案，只考虑增加和修改的情况
			后端：
				1、数据输入方，不做改动，update时将新的影评传递到系统
				2、系统一次性查出，所有需要update的业务影评，并与rid形成key-value格式
				3、将每条业务的旧影评存入oldtxt,新业务txt
 			前端：
 				1、获取新旧影评
 				2、diff对比，得出结果，结果数据格式为 [ {file1:[poi,len],file2:[poi,len]},... ]；即数组长度为修改处的长度，poi为修改的起始位置，len为修改的长度
 				3、循环修改处；
 				4、结合poi,与len 使用slice方法，将newtxt截成三段，中间段使用b标签wrap，再串接起来，形成修改处带标签的字符串

 	##12/04
 		* 连接线上数据库
 			1、申请开通账号 钱中景
			2、xssh登录
			3、/usr/local/bin/mysql_3316.sh
			4、show databases; 冒号必须有
			5、use table
			6、select u.username,w.* from `users` as u,(select workerid,count(*),created_at from `10000_auditlog` where `created_at` > '2017-11-01 00:00:00' and `created_at` < '2017-12-01 00:00:00'  group by `workerid` ) as w where u.id = w.workerid;

		* linux 设置环境变量  export NODE_ENV=development  查看 echo $NODE_ENV
	##12/05
		* 钉钉接口
			1、后端对钉钉的请求都需在之前获取access_token
			2、拿到access_token 之后可做事
	##12/06
		* sql 删除记录 delete from table  where ....  由于删除是对整行记录进行删除，所以不存在 ·delete * · 这样的写法 
		* sql 日期插入格式 	'2017-09-28 03:56:40'

	##12/08
		* linux 安装node
			1、下载压缩版到linux
			2、 tar -xvf   node-v6.10.0-linux-x64.tar.xz 解压
			3、 mv node-v6.10.0-linux-x64  nodejs  移到nodejs文件夹
			5、 ln -s /app/software/nodejs/bin/npm /usr/local/bin/  ln -s /app/software/nodejs/bin/node /usr/local/bin/  建立软连接，即将npm node 到全局  

	##12/12 
		* 上传文件到外网
			1、在本地建立文件夹longjichun 将需要上传的文件放入longjichun，再将文件夹longjichun移到ftp.xunlei.cn
			2、登录linux wget ftp://ftp.xunlei.cn/longjichun/node-v8.9.2-linux-x64.tar.xz 直接下载到当前文件夹
			3、mkdir 创建、rm删除文件
			4、在多个请求合并处理的情况下，应该要保证，如果其中一个请求返回错误，导致异常，也不应该影响其他正常请求的处理
		* express use方法
			前提：app.use('/all',FnA) app.use('/all/other',FnB)
			1、如果FnA中已经res.end,或者send, 则任何带 '/all/'的请求都止步于FnA
			2、如果FnA没有res.end或者send，而是next；则
								1、'/all'请求会not found
								2、'/all/other' 请求会进入FnB

	##12/13
		* 45机器 启动了yl-audit-web pm2显示成功，实际连端口都没有占用，require('connect-redis')时报错，logger.debug 不会显示真正原因，经过console逐步排查，是require('connect-redis')时，缺子包原因
		* rm -rf 删除文件夹 
	
	##12/14

	##12/15
		* request body数据参数必须为字符串, 回调函数，第三个参数为string 需要JSON.parse()

	##12/18 
		
	##12/19
		* crypto 
			** 请求方与响应方同时约定一个secret，称为【S】，约定一个加密方式md5（或者由请求方传递）
			** 请求方根据【S】与一个字符串【A】，经过加密方式，加密得到一字符串【B】
			** 请求方将【A】与【B】发送给响应方
			** 响应方根据【S】与一个字符串【A】，经过加密方式，加密得到一字符串【C】
			** 如果【B】与【C】相等，则通过。
	##12/20
	##12/21
		
		* 新的业务add时，入库的 【status = AUDIT_STATUS_UNAUDIT = 1 = 待审核】；
		自动审核，获取业务时，获取状态为AUDIT_STATUS_UNAUDIT的，如果没有审核结果则将状态设置为【AUDIT_STATUS_REAUDIT_1 = 1 = 待复审】

		* 日志报sequelize cover_url错误，有的1xxxx_text表没有该字段，导致dboper.scanUnauditorResArr 在循环所有表的时候出错，从而导致自动审核失效
		* log 自动审核时，步骤：start app -> 等待第一轮自动任务完成-> 将数据库表改回原来状态

		* 前端使用localhost接口时，打包后


	##01/05
		* MCP业务
		 1、pullMCPShortVideo =>  plugin.preProccess => splitVideo2Images =>screenShot

	## 01/11
		express 设置静态文件缓存，express.static第二个参数设置为{maxAge:time}即可
	## 01/16

	## 01/18  
	## 01/29
		* fetch 方法
		* process.on('uncaughtException',fn),可以防止代码出错的情况下，进程崩溃。
			 
todo: !!!! 系统审核的网址不通过，数量被算到了评论不通过
	  !!!! 自动审核出现积压

	  审核的对象，不应该保存两份

##数据库更改：
	已更改：
		 * wburl表，新增appid列


	todo:
		!!!! 更改黑白名单状态0 1 2，以及字段名，增加appid列，==> 前端也需要改
		!!!! 文本类型应用，添加账户类别 0x1bc ,每一个位代表一种类别？？可以考虑和账户id一起拼接  ？？ extra字段


##sequelize
	* sequelize findOne直接返回成员对象，而不是数组
	* sequelize define 时，出现表名 + 's'的情况， 是因为在定义模型的时候，第三个参数，没有属性'freezeTableName':true 即允许自定义表名
	* select count(*) .. 会返回[{'count(*)':num}]
	* group: attributes: ['workerid','desc', [sequelize.fn('COUNT', sequelize.col('workerid')), 'count']], group:['workerid','desc'], 
	* 分页  limit: 每页多少条, offset :跳过多少条

## linux

	* chmod 777 filename 获取文件权限
	* rsync
		** rsync 同步文件，可以在两台服务器之间进行相互传递文件
		** rsync 需要安装，安装之后可配置，配置文件目录 /etc/rsyncd.conf
		** shell命令：/usr/bin/rsync -av /data/deploy/xunlei.com/audit.adm.youliao.xunlei.com/ 【youliao】@t03127s3.sandai.net::audit.adm.youliao.xunlei.com/ --password-file=【/etc/rsync.pass.youliao】
		【】部分都需要在配置文件里配好
		** 错误：rsync: chgrp "test" (in test) failed: Operation not permitted (1)，91测试同步public文件夹到t03127s3时，也出现了类似错误，
		 原因在于 目标文件夹的chgrp 和 chown 为root，改为nobody之后，就可以传递
	* passwd 修改密码

## react
	* 组件内可设置state变量，更改应当使用setState方法，才会影响视图