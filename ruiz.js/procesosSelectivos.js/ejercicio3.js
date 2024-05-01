//3.	Pedir al usuario un número y mostrar si es par o impar.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: verificar si el número es par o impar
// Salida: mensaje indicando si el número es par o impar
// Pseudocódigo:
// Algoritmo imparopar
// Leer num
// Si el residuo de la división de num entre 2 es igual a 0
//     Escribir "El número es par."
// Sino
//     Escribir "El número es impar."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function imparopar() {
    let num = parseFloat(read("Ingrese un numero "));

    if (num % 2==0 ) {
        write(" El numero es par .");
    } else {
        write(" El numero es impar ");
    }
}

imparopar();
