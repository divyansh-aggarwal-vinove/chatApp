const connection = require('./models/connection');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(express);
const io = require('socket.io')(http);

const port = 3000;

const app = express();

const user = require('./routes/users');
const admin = require('./routes/admin');
const chat = require('./routes/chat');
const chatOperations = require('./controllers/chatoperations');

app.use(cors());

app.use(bodyparser.json());

app.use('/user', user);
app.use('/admin', admin);
app.use('/chat', chat);

io.on("connection", (socket) => {
    //socket.emit('welcome', );

    // pushing messages into an array
    socket.on("message", function (msg) {
        
        const message = {
            ...msg,
            timestamp : new Date()
        };

        const messages = chatOperations.add(message)
    
        io.emit("message", messages);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
})

http.listen('3005', () => {
    console.log('Server is running on port:3005');
});

app.listen(port, () => {
    console.log('Server is running on port:' + port);
})