var express = require('express');
var app = express();

var port = process.env.PORT || 3000

app.use('/js', express.static(__dirname + '/config/script'));
app.use('/css', express.static(__dirname + '/config/style'));
app.use('/img', express.static(__dirname + '/config/image'));

app.get('/', (req, res) =>

    res.sendFile(__dirname + '/public/server.html');

)

app.listen(port, () =>
    console.log(`Website app listening on port ${port}!`);

)