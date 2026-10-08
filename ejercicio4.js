function Libro (autor, titulo, paginas){
this.autor = autor;
this.titulo = titulo;
this.paginas = paginas;
this.prestado =false;

this.prestar = function(){
    if (!this.prestado){
        this.prestado = true;
    }
else {
    console.log (`Alerta!, el libro ${this.titulo}, no se encuentra disponible `);
}
}

this.devolver = function(){
    if (!this.prestado){
        this.presrado = false;
        console.log(`El libro ${this.titulo} fue devuelto con éxito`);

    }
else {
    console.log(`El libro ${this.titulo}, no ha sido devuelto`)
}


}
}

const miLibro = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", 496, )

miLibro.prestar();
miLibro.devolver();
miLibro.prestar();
miLibro.devolver();
miLibro.devolver();
