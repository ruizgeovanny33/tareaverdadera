// //2.	Pedir dos palabras y presentarlas concatenadas
// analisis de requerimientos:
// los datos  o variables del problema
// entrada: palabra1= ""(leer), palabra2=""(leer);concatenadas (proceso)
// proceso: concatenar las dos plabras 
// salida:  las dos palabras concatenadas 
// pseudocodigo:
// algoritmo concatenar
// declarar palabra1="",palabra2="", concatenar= " "
// escribir "ingrese palabra1"
// leer palabra1
// escribir "ingrese palabra 2"
// leer plabra2
// concatenar = palabra 1 +palabra2
// escribir concatenar
// finalgoritmo

const read= require('prompt-sync')();
const write = console.log;

function concatenar(){
    let palabra1= " "; palabra2=" "; concatenar=" "; 
    palabra1= read("ingrese la primera palabra")
    palabra2= read("ingrese la segunda palabra")
     concatenar= palabra1+" "+ palabra2

     write(concatenar)
}
concatenar()