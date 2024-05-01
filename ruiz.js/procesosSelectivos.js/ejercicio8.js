//8.	Pedir al usuario un número y mostrar si es múltiplo de 3.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: verificar si el número es múltiplo de 3
// Salida: mensaje indicando si el número es múltiplo de 3 o no
// Pseudocódigo:
// Algoritmo multiplode3
// Leer num
// Si el residuo de la división de num entre 3 es igual a 0
//     Escribir "El número es múltiplo de 3."
// Sino
//     Escribir "El número no es múltiplo de 3."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function multiplode3() {
    let num = parseFloat(read("Ingrese un numero "));

    if (num % 3 == 0 ) {
        write(" El numero es multiplo de 3 .");
    } else {
        write(" El numero no es multiplo de 3 ");
    }
}

multiplode3();
