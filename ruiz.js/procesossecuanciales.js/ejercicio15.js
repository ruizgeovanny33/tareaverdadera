//15.	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: arreglo de números
// Proceso: intercambiar el primer y último elemento del arreglo
// Salida: arreglo después del intercambio
// Pseudocódigo:
// Algoritmo intercambiarElementos
// Declarar arreglo con números
// Si el arreglo tiene exactamente 5 elementos
//     Almacenar el primer elemento en una variable temporal
//     Asignar el último elemento al primer elemento
//     Asignar la variable temporal al último elemento
//     Escribir "Arreglo después del intercambio:", arreglo
// Sino
//     Escribir "El arreglo no tiene 5 elementos."
// Fin Si
// Finalgoritmo
const read = require('prompt-sync')();
const write = console.log;

function intercambiarElementos() {
    let arreglo = [1, 2, 3, 4, 5];
    if (arreglo.length === 5) {
        // Almacena el primer elemento en una variable temporal
        let temp = arreglo[0];
        // Asigna el último elemento al primer elemento
        arreglo[0] = arreglo[4];
        // Asigna la variable temporal al último elemento
        arreglo[4] = temp;

        write("Arreglo después del intercambio:", arreglo);
    } else {
        write("El arreglo no tiene 5 elementos.");
    }
}

intercambiarElementos();
