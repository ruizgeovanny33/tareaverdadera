//13.	Dado un arreglo de 5 nombres presentarlos todos
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: arreglo de nombres en una cadena
// Proceso: separar la cadena en nombres individuales y mostrar cada nombre por separado
// Salida: impresión de los nombres por separado
// Pseudocódigo:
// Algoritmo arreglosnombres
// Declarar arreglo con nombres en una cadena
// Para cada nombre en el arreglo
//     Escribir nombre
// Fin Para
// Finalgoritmo
const read = require('prompt-sync')();
const write = console.log;
function arreglosnombres() {
    let arreglo = ["juan,pepe,andrew,daniel,jose"];

    for (let i = 0; i < arreglo.length; i++) {
        write(arreglo[i]);
    }
}

// Llama a la función para ejecutarla
arreglosnombres();

