//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: dos números ingresados por el usuario
// Proceso: verificar si los dos números son iguales o diferentes
// Salida: mensaje indicando si los números son iguales o diferentes
// Pseudocódigo:
// Algoritmo igualesOdifrentes
// Leer num1
// Leer num2
// Si num1 es igual a num2
//     Escribir "Los números son iguales."
// Sino
//     Escribir "Los números son diferentes."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function igualesOdifrentes() {
    let num = parseFloat(read("Ingrese un numero "));
    let num2= parseFloat(read("Ingrese un numero "));
    if (num === num2 ) {
        write(" El numero es igual.");
    } else {
        write(" El numero es diferente ");
    }
}

igualesOdifrentes();
