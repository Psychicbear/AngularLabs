var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path')
var cors = require('cors')
app.use(express.static(__dirname + "../src/"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())


let server = http.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server");
    console.log(`Server is listening on: ${host}:${port}`);
})


require('./routes/authRoute.js').route(app)