var express = require('express');
var app = express();
var port = 1337;

app.get('/', function(req, res) {
    res.redirect('/index.html');
});

app.use(express.static(__dirname + '/dist'));

app.listen(port);