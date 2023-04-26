var express = require('express')
var app = express()
var date = new Date();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

app.use(express.static(__dirname + "/public"));




// create a Node.js server that listens on port 3000.
app.listen(3000, function () {
    console.log(current_time, "[Server activity]: Request received")
    console.log('Simple Web Server listening on port 3000!');
})