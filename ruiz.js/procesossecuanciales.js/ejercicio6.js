//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: num1 = 0 (leer), num2 = 0 (leer)
// Proceso: calcular el producto de los dos números ingresados
// Salida: resultado del producto de los dos números
// Pseudocódigo:
// Algoritmo multiplicacion
// Declarar num1 = 0, num2 = 0, multi = 0
// Escribir "Ingrese el primer número"
// Leer num1
// Escribir "Ingrese el segundo número"
// Leer num2
// Multi = num1 * num2
// Escribir "La multiplicación entre los dos números ingresados es " + multi
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function multiplicacion(){
    let num1=0;num2=0; muult=0
    num1=parseFloat(read("ingrese el primer numero"))
    num2=parseFloat(read("ingrese el segundo numero"))
    muult=num1*num2
write("la multiplicacione entre los dos numero ingresados es " +muult)
}
multiplicacion()