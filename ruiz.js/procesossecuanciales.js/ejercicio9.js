//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: num1 = 0 (leer)
// Proceso: imprimir la tabla de multiplicar del número ingresado del 1 al 10
// Salida: impresión de la tabla de multiplicar
// Pseudocódigo:
// Algoritmo tablamulti
// Declarar num1 = 0
// Escribir "Ingrese un número"
// Leer num1
// Para i desde 1 hasta 10
//     Escribir num1 + " * " + i + " = " + (num1 * i)
// Fin Para
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function tablamulti(){
    let num1=0
    num1=parseFloat(read(" ingrse un numero "))
    for(let i=1;i<=10;i++){
        write( num1 +"*"+ i +"=" + (num1*i))
    }
}
tablamulti()