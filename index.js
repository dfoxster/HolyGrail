var express = require('express');
var app     = express();

// serve static files from public directory
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/data', function (req, res) {
    res.send('data route!');
});

app.post('/update/:key/:value', function (req, res) {
    res.send('update route');
});

app.listen(3000, function() {
    console.log('Running on port 3000');
});