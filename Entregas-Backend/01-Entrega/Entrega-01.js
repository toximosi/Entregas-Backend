class Usuario {


    constructor (nombre, apellidos, libros, mascotas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.libros = [];
        this.titulos = [];
        this.mascotas = [];

    }
    getFullName = function(){
        var FullName = this.nombre + " " + this.apellidos;
        return FullName;
    }
    addMascota = function(m){
        this.mascotas.push(m);
    }
    countMascotas(){
        var numMascotas = this.mascotas.length;
        return numMascotas;
    }
    addBook = function(titulo, autor){
        this.libros.push({titulo, autor});
    }
    getBookName = function(){
        this.libros.forEach(e => {
            this.titulos.push(e.titulo);            
        });
    }

}

const usuario = new Usuario ("Jaime", "Ramirez Sanchez");

usuario.addBook("Titulo 01", "Autor 01");
usuario.addBook("Titulo 02", "Autor 02");
usuario.addBook("Titulo 03", "Autor 03");
usuario.getBookName();

usuario.addMascota("gatete");
usuario.addMascota("perrete");
usuario.addMascota("pececin");



console.log(`las características de nuestro usuario es:`)
console.log(`Nombre: ${usuario.getFullName()}`);
console.log(`Libros: ${usuario.titulos}`);
console.log(`tiene ${usuario.countMascotas()} mascotas:`);
console.log(`Mascotas: ${usuario.mascotas}`);