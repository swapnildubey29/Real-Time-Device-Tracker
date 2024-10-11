const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

// Configure
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
    socket.on("send-location", function(data) { 
        io.emit("recieve-location", { id: socket.id, ...data });
    });
    
    socket.on("disconnect", function() {
        io.emit("user-disconnect", socket.id);
    })
});

app.get("/", function(req, res) {
    res.render("index");
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
