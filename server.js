require('babel-register')({
   'presets': ['es2015']
 });

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);