//9.	Solicitar al usuario un número y mostrar si es divisible por 2
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: verificar si el número es divisible por 2
// Salida: mensaje indicando si el número es divisible por 2 o no
// Pseudocódigo:
// Algoritmo divisiblepara2
// Leer num
// Si el residuo de la división de num entre 2 es igual a 0
//     Escribir "El número es divisible por 2."
// Sino
//     Escribir "El número no es divisible por 2."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function divisiblepara2() {
    let num = parseFloat(read("Ingrese un numero "));

    if (num % 2==0 ) {
        write(" El numero es divisible para 2 .");
    } else {
        write(" El numero no es divisible para 2  ");
    }
}

divisiblepara2();
