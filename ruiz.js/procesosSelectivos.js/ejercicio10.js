//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número ingresado por el usuario
// Proceso: verificar si el número es mayor, menor o igual a 100
// Salida: mensaje indicando si el número es mayor, menor o igual a 100
// Pseudocódigo:
// Algoritmo mayorOmenorque100
// Leer num
// Si num es mayor que 100
//     Escribir "El número es mayor que 100."
// Sino Si num es menor que 100
//     Escribir "El número es menor que 100."
// Sino
//     Escribir "El número es igual a 100."
// Fin Si
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;

function mayorOmenorque100() {
    let num = parseFloat(read("Ingrese un numero "));

    if (num >100 ) {
        write(" El numero es mayor que 100 .");
    } else if(num<100){
        write(" El numero es menor que 100 ");
    }else{
        write(" el numero es igual a 100")
    }
}

mayorOmenorque100();
