//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: metros = 0 (leer)
// Proceso: convertir metros a centímetros multiplicándolos por 100
// Salida: resultado de la conversión en centímetros
// Pseudocódigo:
// Algoritmo centimetros
// Declarar metros = 0, resultado = 0
// Escribir "Ingrese los metros a transformar"
// Leer metros
// Resultado = metros * 100
// Escribir "El valor ingresado en centímetros es igual a " + resultado + " centímetros"
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function centimetros(){
    let metros=0; result=0
    metros=parseFloat(read(" ingrese los metros a transformar "))
    result= metros*100
    write(" el valor ingresado a centimetros me da iugal a " +result+ " centimetros ")
}
centimetros()