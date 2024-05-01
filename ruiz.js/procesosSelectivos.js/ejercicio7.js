//7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo-
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: dos nombres ingresados por el usuario
// Proceso: comparar los nombres para determinar si son iguales o cuál es mayor alfabéticamente
// Salida: mensaje indicando si los nombres son iguales o cuál es mayor
// Pseudocódigo:
// Algoritmo compararNombres
// Leer nombre1
// Leer nombre2
// Convertir ambos nombres a minúsculas para simplificar la comparación
// Si nombre1 es igual a nombre2
//     Escribir "Los nombres son iguales."
// Sino Si nombre1 es mayor que nombre2
//     Escribir "El primer nombre es mayor que el segundo."
// Sino
//     Escribir "El primer nombre es menor que el segundo."
// Fin Si
// Finalgoritmo
const read = require('prompt-sync')();
const write = console.log;


function compararNombres() {

    let nombre1 = read("Ingrese el primer nombre: ");
    let nombre2 = read("Ingrese el segundo nombre: ");

    nombre1=nombre1.toLowerCase()
    nombre2= nombre2-toLowerCase()
    if (nombre1 === nombre2) {
        write("Los nombres son iguales.");
    } else if (nombre1 > nombre2) {
        write("El primer nombre es mayor que el segundo.");
    } else {
        write("El primer nombre es menor que el segundo.");
    }
}

compararNombres();
