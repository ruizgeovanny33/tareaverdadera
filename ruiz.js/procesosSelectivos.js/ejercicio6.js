//6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: caracter ingresado por el usuario
// Proceso: verificar si el caracter es una vocal o una consonante
// Salida: mensaje indicando si el caracter es una vocal o una consonante
// Pseudocódigo:
// Algoritmo vocalOconsonante
// Leer caracter
// Convertir el caracter a minúsculas para simplificar la comparación
// Si el caracter es "a", "e", "i", "o" o "u"
//     Escribir "El caracter es una vocal."
// Sino
//     Escribir "El caracter es una consonante."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function vocalOconsonante() {
    let caracter = read("Ingrese un cracter ");
    caracter= caracter.toLowerCase()
    if (caracter==="a" || caracter=== "e" ||caracter==="i" || caracter=== "o"|| caracter==="u") {
        write(" El caracter es una vocal .");
     } else {
        write(" El cracter es una consonante ");
    }
}

vocalOconsonante();
