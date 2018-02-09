exec execSync
spwan = execSync 
exec 和spwan都是执行命令。
fork 执行node命令，并且父子进程可通信

 创建子进程，如果添加了该参数{detached: true}，则父进程消失了也不会影戏子进程