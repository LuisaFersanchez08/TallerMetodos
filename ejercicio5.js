const prompt = require('prompt-sync')();

function Vehiculo (marca, modelo, año, color, precio) {
    this.marca= marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio= precio;



}


const vehiculoInformacion1 = prompt("Ingrese la información del vehículo")
const vehiculoInformacion2 = prompt("Ingrese la información del vehículo")
const vehiculoInformacion3 = prompt("Ingrese la información del vehículo")