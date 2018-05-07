# 关于vue的一些为什么
 * 为什么组件的data应该是一个函数  ==> 如果return 一个对象，则一不能运行，然后所有的组件都将公用这个对象，造成耦合，而设置成一个返回对象的函数，则每个组件运行该函数时可以得到一个新的对象。

 * 为什么子组件改变数据，使用事件通知的方式，由于双向绑定的原因，这样设计会导致子组件改变数据时导致父组件也直接改变，采用事件通知机制，可以使父组件有选择的余地，可以判断，是否改变视图。


创建前/后：在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。
载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。
更新前/后：当data变化时，会触发beforeUpdate和updated方法。
销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。


mutations 都是同步事务