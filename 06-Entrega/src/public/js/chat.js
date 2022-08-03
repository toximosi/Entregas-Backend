
const socket = io();

/* alertas */
swal.fire({
    icon:'question',
    title: 'Identificate',
    text: 'ingrsa el usuariocon el que te identificarás en el chat',
    input:'nombre',
    inputValidator:(value) =>{
        return !value && 'Necesitas identificarte';
    },
    confirmButtonText:'Ok',
})