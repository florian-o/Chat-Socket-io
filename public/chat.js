// creating connection -client
const socket = io.connect('http://localhost:8080');

// Dom
const message = document.getElementById('message'),
user = document.getElementById('user'),
btn = document.getElementById('send'),
output = document.getElementById('output'),
feedback = document.getElementById('feedback');

// Sending msg
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        user:user.value
    });
});

message.addEventListener('keypress',() => {
    socket.emit('typing',user.value);
});

socket.on('chat',(data)=>{
    feedback.innerHTML =''
    output.innerHTML += '<p><strong>'+ data.user +':</strong>' + data.message +'</p>'
});


socket.on('typing',(data)=>{
    feedback.innerHTML = '<p><em>' + data + ' est en train d\'ecrire... '+ '</em></p>';    
});