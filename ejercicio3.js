function Estudiante(nombre, curso, nota){
    this.nombre= nombre;
    this.curso = curso;
    this.nota = nota;


    this.aprobado= this.nota >=3.0;

    this.mostrarResultado= function(){
        const estado = this.aprobado
        console.log(`El estudiante ${this.nombre}, del curso ${this.curso}, obtuvo una nota de ${this.nota}, y ${estado} el curso`);
    }
}

const estuddiante1 = new Estudiante("Luisa", "Ingles", 4.5)
const estuddiante2 = new Estudiante("Andres", "Ingles", 4.2)
const estuddiante3 = new Estudiante("Juan", "Python", 2.5)
const estuddiante4 = new Estudiante("Daniela", "JavaScript", 4.7)

estuddiante1.mostrarResultado();
estuddiante2.mostrarResultado();
estuddiante3.mostrarResultado();
estuddiante4.mostrarResultado();