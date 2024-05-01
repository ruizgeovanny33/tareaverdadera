//20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
// Determinar si el primer y el último elemento de un arreglo son pares o impares.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: un arreglo de números
// Proceso: verificar si el primer y el último elemento son pares o impares
// Salida: mensajes indicando la paridad del primer y último elemento
// Pseudocódigo:
// Algoritmo parImparElemento
//    Definir arreglo como [2, 2, 3, 4, 3]
//    Obtener el primer elemento del arreglo y almacenarlo en primerElemento
//    Obtener el último elemento del arreglo y almacenarlo en ultimoElemento
//    Si el residuo de dividir primerElemento entre 2 es 0
//        Escribir "El primer elemento es par."
//    Sino, si el residuo de dividir primerElemento entre 2 no es 0
//        Escribir "El primer elemento es impar."
//    Si el residuo de dividir ultimoElemento entre 2 es 0
//        Escribir "El último elemento es par."
//    Sino, si el residuo de dividir ultimoElemento entre 2 no es 0
//        Escribir "El último elemento es impar."
// Finalgoritmo

const read= require('prompt-sync')();
const write = console.log;

function parImparElemento() {
    let arreglo = [2, 2, 3, 4, 3];
    let primerElemento = arreglo[0];
    let ultimoElemento = arreglo[arreglo.length - 1];

    if (primerElemento %2 == 0 ) {
        write("El primer elemento es par.");
    } else if (primerElemento %2!==0 ) {
        write("El primer elemento es impar.");
    }

    if (ultimoElemento %2 == 0 ) {
        write("El ultimo Elemento elemento es par.");
    } else if (ultimoElemento %2!==0 ) {
        write("El ultimo Elemento elemento es impar.");
    }
}

parImparElemento();
