var express = require('express');
var app = express();
var port = 1337;

app.get('/', function(req, res) {
    res.sendfile('./index.html', {root: __dirname});
});

app.use(express.static(__dirname + '/dist'));

console.log('starting on port: ', port);
app.listen(port);