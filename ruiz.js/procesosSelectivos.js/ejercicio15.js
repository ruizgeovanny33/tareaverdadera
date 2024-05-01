//15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
// Solicitar al usuario el precio y el año de un vehículo, y determinar el monto a pagar considerando un descuento por antigüedad.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: precio del vehículo y año del vehículo
// Proceso: calcular el total a pagar considerando un descuento para vehículos anteriores a cierto año
// Salida: monto total a pagar con o sin descuento aplicado
// Pseudocódigo:
// Algoritmo vehiculo
//    Leer precioDelVehiculo
//    Leer añoDelVehiculo
//    Definir descuento como 10%
//    Si el año del vehículo es anterior a 2010
//        Calcular el total a pagar con descuento aplicado
//        Escribir "El precio con descuento por año le da un total a pagar de " más el total
//    Sino
//        Escribir "El monto a pagar es de " más el precio del vehículo
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function vehiculo() {
    let precio = parseFloat(read("Ingrese el precio del vehiculo: "));
    let año=parseFloat(read("Ingrese el año del vehiculo  "));
    let descuento= 0.10
    let  total= 0

    if (año<2010){
       total= precio-(precio*descuento)
       write(" el precio con descuento por año le da un total a pagar de " + total)
    }else{
        write(" el monto a pagar es de "+ precio)
    }
}

vehiculo();

