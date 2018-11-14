var express = require('express');

var app = express();

var controll = require('./Controllers/controller');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/index.html');
});

app.listen('4242', function(){
    console.log('Server up and running');
});