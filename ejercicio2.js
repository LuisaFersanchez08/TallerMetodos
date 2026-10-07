function Mascota (nombre, especie, edad, peso){
this.nombre = nombre;
this.especie = especie;
this.edad = edad;
this.peso = peso;


this.presentarse = function() {
    return `Hola, mi nombre es  ${this.nombre}, soy un ${this.especie}, y tengo ${this.edad}, años, mi peso es ${this.peso} `

    
}
}


const mascota1 = new Mascota("Marly", "Perro", 11, 31)
const mascota2 = new Mascota("Nena", "Perro", 14, 7)
const mascota3 = new Mascota("Miel", "Perro", 5, 28)

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());



