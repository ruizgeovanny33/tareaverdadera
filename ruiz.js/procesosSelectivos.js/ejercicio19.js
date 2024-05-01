//19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento. 
// Determinar si el primer elemento de un arreglo es mayor que el último elemento.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: un arreglo de números
// Proceso: comparar el primer y el último elemento del arreglo
// Salida: mensaje indicando si el primer elemento es mayor, igual o menor que el último elemento
// Pseudocódigo:
// Algoritmo mayorElemento
//    Definir arreglo como [1, 2, 3, 4, 5]
//    Obtener el primer elemento del arreglo y almacenarlo en primerElemento
//    Obtener el último elemento del arreglo y almacenarlo en ultimoElemento
//    Si primerElemento es mayor que ultimoElemento
//        Escribir "El primer elemento es mayor que el último elemento."
//    Sino, si primerElemento es igual a ultimoElemento
//        Escribir "El primer elemento es igual al último elemento."
//    Sino
//        Escribir "El primer elemento no es mayor al último elemento."
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function mayorelemento() {
    let arreglo = [1, 2, 3, 4, 5];
    let primerElemento = arreglo[0];
    let ultimoElemento = arreglo[arreglo.length - 1];

    if (primerElemento > ultimoElemento) {
        write("El primer elemento es mayor que el último elemento.");
    } else if (primerElemento === ultimoElemento) {
        write("El primer elemento es igual al último elemento.");
    } else {
        write("El primer elemento no es mayor al último elemento.");
    }
}

mayorelemento();
