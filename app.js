var express = require('express');

var app = express();

var PORT = process.env.PORT || 4242;

var controll = require('./Controllers/controller');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/index.html');
});

app.listen(PORT, function(){
    console.log('Server up and running');
});