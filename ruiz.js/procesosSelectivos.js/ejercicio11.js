//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: verificar si el número tiene un solo dígito o más de uno
// Salida: mensaje indicando si el número tiene un solo dígito o más de uno
// Pseudocódigo:
// Algoritmo numerodeunDigito
// Leer num
// Si num es mayor o igual que 0
//     Si num es menor que 10
//         Escribir "El número es de un solo dígito."
//     Sino
//         Escribir "El número tiene más de un dígito."
//     Fin Si
// Sino
//     Escribir "Número negativo inválido. Por favor, intente de nuevo."
// Fin Si
// Finalgoritmo

const read = require('prompt-sync')();
const write = console.log;

function numerodeunDigito() {
    let num = parseFloat(read("Ingrese un número: "));

    if (num >= 0) {
        if (num < 10) {
            write("El número es de un solo dígito.");
        } else {
            write("El número tiene más de un dígito.");
        }
    } else {
        write("Número negativo inválido. Por favor, intente de nuevo.");
    }
}

numerodeunDigito();
