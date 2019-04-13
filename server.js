// server.js
// april 13, 19
// @frkntony

// import express
let express = require("express");

// import path
let path = require("path");

// encaps exrepess
let app = express();

// cloud env port
let HTTP_PORT = process.env.PORT || 1337;

// serve public folder
app.use(express.static("public")); 

// start the server
app.listen(HTTP_PORT, function(){
    console.log("Server listening on port: " + HTTP_PORT);
});