var fork = require("child_process").fork;
fork('./sources/httpServer.js',{detached:true})