let username;
const Chatbox = document.getElementById('chatbox')

const socket = io({
  autoConnect: false,//Evitamos que se conocte en la carga
});


/* alertas */
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
    username = res.value;
    socket.connect();//websocket se conecta al ingresar el usuario
  });
  //listener
Chatbox.addEventListener('keyup', e => {
  if (e.key === "Enter") {
    if (Chatbox.value.trim().length > 0) {
        socket.emit('message', {
          user: username,
          message: Chatbox.value,
        }
      )
    }
  }
});

socket.on('chatlog', data => { 
  let log = document.getElementById('chatlog');
  let messages = '';
  data.forEach(message => { 
    messages = messages + `${message.user} dice: ${message.message}<br>`
  })
  log.innerHTML = messages;
})
socket.on('newUser', data => { 
  if (user) { 
    swal.fire({
      text: 'Nuevo usuario en el chat',
      toast: true,
      position: 'top-right'
    })
  }
})