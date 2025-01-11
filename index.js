const http = require('http');
const express = require('express');
const path = require('path');
const app=express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const publicPath = path.join(__dirname,'public');

io.on('connection', (socket) => {
    socket.on('user_message',message=>{     
        socket.emit('message',message);   
    })
  });

app.get('/',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});

server.listen(5002,()=>{
    console.log('Server Started');
    
})