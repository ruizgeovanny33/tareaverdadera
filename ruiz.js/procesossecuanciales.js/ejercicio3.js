//3.	Solicitar al usuario dos números y mostrar su suma
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: num1 = 0 (leer), num2 = 0 (leer)
// Proceso: sumar los dos números ingresados
// Salida: resultado de la suma
// Pseudocódigo:
// Algoritmo suma
// Declarar num1 = 0, num2 = 0, suma = 0
// Escribir "Ingrese el primer número"
// Leer num1
// Escribir "Ingrese el segundo número"
// Leer num2
// Suma = num1 + num2
// Escribir Suma
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function suma(){
    let num1=0;num2=0;suma=0
    num1= parseFloat(read("ingrese el primer numero"))
    num2= parseFloat(read("ingrese el segundo  numero"))
    suma= num1+num2

    write(suma)

}
suma()