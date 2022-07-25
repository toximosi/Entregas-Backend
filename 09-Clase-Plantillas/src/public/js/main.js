const template = Handlebars.compile(`<ul>
        <li>{{ nombre }}</li>
        <li>{{ apellido }}</li>
        <li>{{ edad }}</li>
        <li>{{ mail }}</li>
        <li>{{ telefono }}</li>
    </ul>`);

const htmlFinal = template({
    nombre: 'Mauricio',
    apellido: 'Espinosa',
    edad: 25,
    mail: 'correoMauricio@correo.com',
    telefono: '123456789'
});

document.getElementById('data').innerHTML = htmlFinal;
