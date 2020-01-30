var express = require('express');
var app = express();

var port = process.env.PORT || 3000

app.get('/', (req, res) =>

    res.send('Welcome to Crack website')

)

app.listen(port, () =>
    console.log(`Website app listening on port ${port}!`)

)