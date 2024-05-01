//14.	Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: arreglo de números
// Proceso: verificar si el arreglo tiene 5 elementos y presentar el primer, elemento del medio y último elemento
// Salida: impresión detallada de los elementos del arreglo
// Pseudocódigo:
// Algoritmo presentarElementos
// Declarar arreglo con números
// Si el arreglo tiene exactamente 5 elementos
//     Escribir "Primer elemento:", primer elemento del arreglo
//     Escribir "Elemento del medio:", elemento del medio del arreglo
//     Escribir "Último elemento:", último elemento del arreglo
// Sino
//     Escribir "El arreglo no tiene 5 elementos."
// Fin Si
// Finalgoritmo
const read = require('prompt-sync')();
const write = console.log;

function presentarElementos() {
    let  arreglo = [1, 2, 3, 4, 5];
    if (arreglo.length === 5) {
        write("Primer elemento:", arreglo[0]);
        write("Elemento del medio:", arreglo[2]);
        write("Último elemento:", arreglo[4]);
    } else {
        write("El arreglo no tiene 5 elementos.");
    }
}

presentarElementos();