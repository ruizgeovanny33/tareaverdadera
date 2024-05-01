//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: precio del producto y porcentaje de descuento
// Proceso: calcular el total a pagar aplicando el descuento
// Salida: total a pagar con el descuento aplicado
// Pseudocódigo:
// Algoritmo descuento
//    Leer precioProducto
//    Leer porcentajeDescuento
//    Convertir el porcentaje de descuento a su valor decimal
//    Calcular el descuento restando al precio del producto el producto del precio por el porcentaje de descuento
//    Escribir el total a pagar con el descuento aplicado
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function descuento() {
    let ttalpagar=0; preciop=0;descuento=0
     preciop = parseFloat(read("Ingrese un numero ")) 
    descuento= parseFloat(read(" ingrese el porcentae de descuento  "))
    descuento = descuento /100 
    ttalpagar= preciop-( preciop*descuento )

    write(ttalpagar)
}
descuento()