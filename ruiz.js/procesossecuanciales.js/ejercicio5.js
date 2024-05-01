//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: edad = 0 (leer)
// Proceso: calcular la edad del próximo año sumando 1 a la edad ingresada
// Salida: mensaje indicando la edad del próximo año
// Pseudocódigo:
// Algoritmo edad
// Declarar edad = 0, cont = 0
// Escribir "Ingrese su edad"
// Leer edad
// Cont = edad + 1
// Escribir "El próximo año tendrás " + cont + " años"
// Finalgoritmo

const read= require('prompt-sync')();
const write = console.log;
function edad(){
    let edad=0; cont=0
    edad= parseFloat(read("ingrse su edad"))
    cont= edad+1
    write("el promximo año tendras " +cont+ " años ")
}
edad()