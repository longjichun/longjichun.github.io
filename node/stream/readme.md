node两种缓存处理模式：
第一种是等到所有数据接收完毕，一次性从缓存读取，这就是传统的读取文件的方式；
第二种是采用“数据流”的方式，收到一块数据，就读取一块，即在数据还没有接收完成时，就开始处理它。