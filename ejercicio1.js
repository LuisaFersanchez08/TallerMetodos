function Computador(marca, procesador,ram,precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;


    console.log(`La marca es : ${this.marca}, con un procesador ${this.procesador}, y una ram de ${this.ram}, con un costo de ${this.precio} `);


}  



const computador1 =  new Computador("Lenovo", "AMD", "32 GB", 10000000);
const computador2 =  new Computador("Asus", "Intel", "32 GB", 4000000);
const computador3 =  new Computador("Acer", "AMD", "16 GB", 5000000);