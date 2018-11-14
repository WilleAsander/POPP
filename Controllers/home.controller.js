var path = require('path');

exports.test = function(req,res){
    res.send("Hello from MVC and Node");
}

exports.home = function(req,res){
    res.sendFile(path.resolve('www/index.html'));
}