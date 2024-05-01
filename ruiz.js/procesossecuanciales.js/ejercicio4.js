//4.	Pedir al usuario un número y mostrar su doble.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: num1 = 0 (leer)
// Proceso: calcular el doble del número ingresado
// Salida: resultado del doble del número
// Pseudocódigo:
// Algoritmo doble
// Declarar num1 = 0, multi = 0
// Escribir "Ingrese el número"
// Leer num1
// Multi = num1 * num1
// Escribir Multi
// Finalgoritmo

const read= require('prompt-sync')();
const write = console.log;
function doble(){
    let num1=0;multi=1
    num1=parseFloat(read("ingrese el numero"))
    multi= num1*num1
    write(multi)
}
doble()