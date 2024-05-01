//2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: edad ingresada por el usuario
// Proceso: verificar si la edad es mayor o igual a 18
// Salida: mensaje indicando si la persona es mayor o menor de edad
// Pseudocódigo:
// Algoritmo menorOmayorDeEdad
// Leer edad
// Mientras la edad sea menor o igual a 0
//     Escribir "Ingrese una edad válida."
//     Leer edad nuevamente
// Fin Mientras
// Si la edad es mayor o igual a 18
//     Escribir "Usted es mayor de edad."
// Sino
//     Escribir "Usted es menor de edad."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function menorOmayorDeEdad() {
    let edad = parseFloat(read("Ingrese su edad: "));

    while (edad <= 0) {
        write("Ingrese una edad válida.");
        edad = parseFloat(read("Ingrese su edad: "));
    }

    if (edad >= 18) {
        write("Usted es mayor de edad.");
    } else {
        write("Usted es menor de edad.");
    }
}

menorOmayorDeEdad();
