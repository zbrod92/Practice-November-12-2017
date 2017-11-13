var express = require('express');
var app = express();
var mongoose = require(‘mongoose’);

//DB setup
mongoose.connect("mongodb://mongo:27017");

app.get('/', function(req, res) {
	res.send('Hello World')
})

app.listen(8081, function() {
	console.log('app listening on port 8081')
})
