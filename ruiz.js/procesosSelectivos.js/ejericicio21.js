//21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// Encontrar el mayor elemento de un arreglo.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: un arreglo de números
// Proceso: encontrar el mayor elemento del arreglo
// Salida: el mayor elemento del arreglo
// Pseudocódigo:
// Algoritmo ElMayor
//    Definir arreglo como [6, 5, 3, ]
//    Obtener el primer elemento del arreglo y almacenarlo en mayor
//    Para cada elemento en el arreglo (comenzando desde el segundo elemento)
//        Si el elemento actual es mayor que el mayor
//            Asignar el elemento actual como el nuevo mayor
//    Escribir "El mayor elemento del arreglo es:" seguido del valor de mayor
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function Elmayor() {
    let arreglo = [6, 5, 3];
    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    write("El mayor elemento del arreglo es:", mayor);
}

Elmayor();
