/* const Chatbox = document.getElementById('chatbox') */
const socket = io({
  autoConnect: false,//Evitamos que se conocte en la carga
});

/* alertas */
let username;
Swal.fire({
    icon: "question",
    title: "Identificate",
    text: "ingresa el usuario con el que te identificarás en el chat",
    input: "text",
    inputValidator: (value) => {
      return !value && "Necesitas identificarte";
    },
    
    confirmButtonText: "Ok",
    allowOutsideClick: false,
    allowEscapeKey:false,
  }).then((res) => {
    socket.connect();//websocket se conecta al ingresar el usuario
    username = res.value;
    /* console.log(username); */
    let name = document.getElementById('user-name');
    name.innerHTML = username; 
  });

//listener
chatbox.addEventListener('keyup', e => {
  if (e.key === "Enter") {
    if (chatbox.value.trim().length > 0) {
      const date = new Date();
      let message = {
        user: username,
        date: date,
        message: chatbox.value,
      }
      socket.emit('message', message);
      
      fetch('/api/chats',{//Es una promesa ---- //conecta el html con el backend.
        method:'POST',
        body:JSON.stringify(message),
        headers:{
            'Content-Type':'application/json'
        }
      }).then( res => res.json())

      chatbox.value = '';
    }
  }
});

socket.on('chatlog', data => { 
  
  let log = document.getElementById('chatlog');
  let messagesOld = log.innerHTML
  let messages = '';
  data.forEach(message => { 
    messages = `
                <div class="conv">
                  <div class="avatar">👽 ${message.user}</div>
                  <div class="text">${message.message}</div>
                  <div class="date">${message.date}</div>
                </div>`+ messagesOld;
  })
  log.innerHTML = messages;
  
})
/* socket.on('newUser', data => { 
  if (user) { 
    swal.fire({
      text: 'Nuevo usuario en el chat',
      toast: true,
      position: 'top-right',
    })
  }
}) */