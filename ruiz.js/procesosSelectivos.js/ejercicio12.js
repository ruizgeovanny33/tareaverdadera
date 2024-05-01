//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: precio del producto y porcentaje de IVA
// Proceso: calcular el total a pagar incluyendo el IVA
// Salida: total a pagar incluyendo el IVA
// Pseudocódigo:
// Algoritmo factura
// Leer precio
// Leer iva
// Convertir el porcentaje de IVA a su valor decimal
// Calcular el total a pagar sumando el precio y el monto del IVA
// Escribir el total a pagar
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function factura() {
    let ttalpagar=0; precio=0;iva=0
     precio = parseFloat(read("Ingrese un numero ")) 
    iva= parseFloat(read(" ingrese el total de iva "))
    iva = iva /100 
    ttalpagar= precio+( precio*iva )

    write(ttalpagar)
}

factura()