//10.	Pedir al usuario dos números y mostrar el mayor.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: num1 = 0 (leer), num2 = 0 (leer)
// Proceso: comparar los dos números ingresados y determinar cuál es mayor o si son iguales
// Salida: mensaje indicando el número mayor o si son iguales
// Pseudocódigo:
// Algoritmo mayor
// Declarar num1 = 0, num2 = 0
// Escribir "Ingrese el primer número"
// Leer num1
// Escribir "Ingrese el segundo número"
// Leer num2
// Si num1 es mayor que num2
//     Escribir "El número mayor es " + num1
// Sino si num1 es menor que num2
//     Escribir "El número mayor es " + num2
// Sino
//     Escribir "Los números son iguales"
// Fin Si
// Finalgoritmo

const read= require('prompt-sync')();
const write = console.log;
function mayor(){
let num1=0;num2=0
num1=parseFloat(read(" ingrese el primer numero "))
num2=parseFloat(read(" ingrese el segundo  numero "))
if (num1 > num2) {
    write("El número mayor es " + num1);
} else if (num1 < num2) {
    write("El número mayor es " + num2);
} else {
    write("Los números son iguales.");
}
}

mayor()
