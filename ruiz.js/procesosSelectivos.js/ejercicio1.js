//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: determinar si el número es mayor, menor o igual que 10
// Salida: mensaje indicando si el número es mayor, menor o igual que 10
// Pseudocódigo:
// Algoritmo mayorOmenor
// Declarar num1 = 0
// Escribir "Ingrese el número"
// Leer num1
// Si num1 es menor que 10
//     Escribir "El número " + num1 + " es menor que 10"
// Sino Si num1 es mayor que 10
//     Escribir "El número " + num1 + " es mayor que 10"
// Sino
//     Escribir "El número " + num1 + " es igual que 10"
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function mayorOmenor(){
    let num1=0
    num1=parseFloat(read(" ingrese el numero "))
    if(num1<10){
        write(" el numero " + num1+ " es menor que 10 ")
    }else if(num1>10){
        write(" el numero " + num1+ " es mayor que 10 ")
    }else {
        write(" el numero " + num1+ " es igual que 10 ")

    }
}
mayorOmenor()