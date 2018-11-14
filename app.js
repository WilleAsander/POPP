var express = require('express');

var app = express();

var PORT = process.env.PORT || 4242;

var home = require('./Routes/home.router');

app.use('/', home);

app.listen(PORT, function(){
    console.log('Server up and running');
});