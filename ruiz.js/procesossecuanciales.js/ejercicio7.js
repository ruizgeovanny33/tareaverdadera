//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: Celsius = 0 (leer)
// Proceso: convertir la temperatura de Celsius a Fahrenheit
// Salida: temperatura en grados Fahrenheit
// Pseudocódigo:
// Algoritmo FahrenheitA
// Declarar Celsius = 0, resultado = 0
// Escribir "Ingrese la temperatura en grados Celsius"
// Leer Celsius
// Resultado = (Celsius * 9/5) + 32
// Escribir "El valor en grados Fahrenheit es " + resultado
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function FahrenheitA(){
let Celssius= 0 ;result=0
Celssius=parseFloat(read(" ingrese la temperatura "))
result=(Celssius * 9/5) + 32
write("el valor a grados Fahrenheit es " +result)
}
FahrenheitA()