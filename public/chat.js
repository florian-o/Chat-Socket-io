

// Catch Dom

const message = document.getElementById('message'),
user = document.getElementById('user'),
btn = document.getElementById('send'),
output = document.getElementById('feedback');


btn.addEventListener('click', () => {
    console.log({dataUser,dataMsg}); 
    output.insertAdjacentHTML('beforebegin', `<p><span>${dataUser}:</span> ${dataMsg}</p>`);     
    message.value = "";
    user.value = "";    
});

message.addEventListener('keyup', evt => {
   dataMsg =  evt.target.value ;           
});

user.addEventListener('keyup',evt => {
   dataUser = evt.target.value;     
});




