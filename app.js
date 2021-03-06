var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var product = require('./Routes/product.route');
var home = require('./Routes/home.router');
var PORT = process.env.PORT || 4242;
var app = express();

var db_url = 'mongodb://dbAdmin:passw0rd@ds163103.mlab.com:63103/te4-popp';
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);
app.use('/', express.static(__dirname + '/www'));
app.use('/', home);

app.listen(PORT, function(){
    console.log('Server up and running');
});