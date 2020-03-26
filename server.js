const express = require('express');

const socket = require('socket.io');

const port = 8080;
const app = express();

// Setup server
const server = app.listen(port, () => {
    console.log(`ecoute sur le port ${port}`);    
});
app.use(express.static('public'));

// Setup Socket-server
const io = socket(server);

io.on('connection',(socket)=>{
    console.log('creating connection',socket.id);
    
})

