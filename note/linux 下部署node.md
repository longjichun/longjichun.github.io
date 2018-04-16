linux 下部署node
1、在系统中建立一个文件夹，将node的linux压缩包，放进去。
2、进入文件夹bin,ls 查看后，有node，和npm两个文件




3、执行./node -v 如果出现 -bash: ./node: Permission denied => sudo chmod 777 node;sudo chmod 777 npm
4、ln -s /home/kun/mysoftware/node-v6.11.3-linux-x64/bin/node /usr/local/bin/node全局

	sudo npm install pm2 -g 直接npm貌似会失败


5、检查ngnix配置是否正确：/usr/local/nginx-1.11.3/sbin/nginx -t
6、重启ngnix /usr/local/nginx-1.11.3/sbin/nginx  -s reload



7. nginx 错误 【nginx: [error] OpenEvent("Global\ngx_stop_5552") failed (2: The system cannot find the file specified)】 原因是没有启动

8 nginx location 匹配，不算成功

mysql数据库

node --inspect app.js 运行后在chrome中有个node标志， debugger

服务器上ajax不访问服务器上提供的服务，而访问本地提供的，原因在于前端代码里边设置的访问路径为localhost
app.listen(3000,'127.0.0.1')

arr.fill


linux机器重启  reboot
	mysql重新启动 service mysqld start		连接mysql 进入mysql/bin文件夹运行mysql -uroot -pxunlei


	pm2重新启动			开机自动启动流程 pm2 start -> 	pm2 startup -> 		pm2 save -> 	chkconfig 查看

	
	nginx重新启动		/usr/local/nginx/sbin/nginx -t 查看	-> /usr/local/nginx/sbin/nginx
					开机启动
					1. 在/etc/init.d/nginx 建立nginx文件，脚本内容在https://www.nginx.com/resources/wiki/start/topics/examples/redhatnginxinit/ 
					2. 注意修改nginx="/usr/local/sbin/nginx" 执行路径； 配置文件的路径 NGINX_CONF_FILE="/usr/local/nginx/conf/nginx.conf"
					3. 设置文件读写权限 chmod a+x /etc/init.d/nginx
					4. windows环境下建立的脚本，由于和linux的换行符不一样，在/etc/init.d/nginx下执行命令 service nginx start 会出现错误（env: /etc/init.d/nginx: No such file or directory），需要对脚本进行转换，执行脚本 dos2unix nginx  （如果没有该命令，可执行脚本 yum -y install dos2unix unix2dos 进行安装）
					4. 开机启动流程

	开机自动启动：chkconfig --list 查看是否存在需要重启的应用（不存在使用chkconfig --add），如果没有三个+on,需要使用chkconfig mysqld on进行启动



linux  开放防火墙端口
	运行 ：vim /etc/sysconfig/iptables    编辑添加：-A RH-Firewall-1-INPUT -p tcp -m state --state NEW -m tcp --dport 3040 -j ACCEPT
   --->重启 service iptables restart -> 即开放3040端口
	
	
	不保存，并退出vi-----------------------  :q
	保存，并退出vi-----------------------  :wq   或  :x

redis-cli -h 127.0.0.1 -p 6379 (-a password)
redis 127.0.0.1:6379> config set requirepass test123

查看进程ps -ef |grep node


#执行脚本 ./somescript
#host vi /etc/hosts
-------------------------------问题----------------------------------
Host is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'
本地机器连接A 远程数据库B 出现该错误
解决：找一台能连接 B 的机器C，在C找到文件夹mysqladmin位置，命令：  进入mysql环境  flush hosts;

