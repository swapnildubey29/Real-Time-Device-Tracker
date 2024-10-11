const express = require('express')
const app = express()
const http = require('http')

//Configure
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)

app.set("view engine", "ejs")
app.set(express.static(path.join(__dirname,"public")))



app.get("/", function(req,res) {
     res.send("hey")
});

server.listen(8000)