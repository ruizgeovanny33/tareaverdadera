//4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: verificar si el número es positivo o negativo
// Salida: mensaje indicando si el número es positivo o negativo
// Pseudocódigo:
// Algoritmo positivoOnegativo
// Leer num
// Si num es mayor que 0
//     Escribir "El número es positivo."
// Sino
//     Escribir "El número es negativo."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function positivoOnegativo() {
    let num = parseFloat(read("Ingrese un numero "));

    if (num > 0 ) {
        write(" El numero es positivo .");
    } else {
        write(" El numero es negativo ");
    }
}

positivoOnegativo();
