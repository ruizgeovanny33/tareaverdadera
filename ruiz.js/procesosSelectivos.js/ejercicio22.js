//22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Calcular la suma de todos los elementos de un arreglo.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: un arreglo de números
// Proceso: sumar todos los elementos del arreglo
// Salida: total de la suma de los elementos del arreglo
// Pseudocódigo:
// Algoritmo SumaDeElemento
//    Definir arreglo como [6, 5, 3, 11]
//    Inicializar suma como 0
//    Para cada elemento en el arreglo
//        Sumar el elemento a la suma
//    Escribir "El total de la suma del arreglo es" seguido del valor de suma
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function SumadeElemento() {
    let arreglo = [6, 5, 3,11];
    let suma = 0;

    for (let i = 0; i <arreglo.length; i++) {
        suma+= arreglo[i]
    }

    write(" el total de la suma del arreglo es "+ suma);
}

SumadeElemento();
