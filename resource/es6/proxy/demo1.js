var obj = new Proxy({},{
    get: (target,key, receiver) =>{
        console.log(`getting ${key}`);
        console.log(target, receiver)
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}`)
        return Reflect.set(target, key,value,receiver)
    },
    apply:function(){
        console.log(3)
    }
})
