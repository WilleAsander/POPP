var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 4242;
var product = require('./Routes/product.route');
var home = require('./Routes/home.router');

var mongoose = require('mongoose');
var db_url = 'mongodb://dbAdmin:passw0rd@ds163103.mlab.com:63103/te4-popp';
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);
app.use('/products', product);


app.listen(PORT, function(){
    console.log('Server up and running');
});