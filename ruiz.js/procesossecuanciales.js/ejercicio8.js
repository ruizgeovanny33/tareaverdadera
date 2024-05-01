//8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: nombre = "" (leer)
// Proceso: imprimir el nombre ingresado tres veces
// Salida: impresión del nombre tres veces
// Pseudocódigo:
// Algoritmo repetir
// Declarar nombre = "", i = 0
// Escribir "Ingrese su nombre"
// Leer nombre
// Para i desde 0 hasta 2
//     Escribir nombre
// Fin Para
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function repetir(){
    let nombre= " ";
    nombre=read(" ingrese su nombre ")
    for(let i=0;i<3;i++){
        write(nombre)
    }

}
repetir()
