//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: sueldo mensual del empleado
// Proceso: calcular el sueldo anual y el impuesto sobre el excedente del sueldo anual
// Salida: sueldo neto anual del empleado
// Pseudocódigo:
// Algoritmo calcularSueldoNetoAnual
//    Leer sueldoMensual
//    Calcular sueldoAnual multiplicando sueldoMensual por 12
//    Si sueldoAnual es mayor que 30000
//        Calcular excedente restando 30000 a sueldoAnual
//        Calcular impuesto sobre el excedente multiplicando excedente por 0.15
//        Calcular sueldoNetoAnual restando impuesto a sueldoAnual
//        Escribir "Su sueldo neto anual es:" seguido de sueldoNetoAnual con dos decimales
//    Sino
//        Escribir "Su sueldo anual no supera los $30,000."
// Finalgoritmoconst read = require('prompt-sync')();
const write = console.log;

function calcularSueldoNetoAnual() {
    const sueldoMensual = parseFloat(read("Ingrese su sueldo mensual: "));
    const sueldoAnual = sueldoMensual * 12;

    if (sueldoAnual > 30000) {
        const excedente = sueldoAnual - 30000;
        const impuesto = excedente * 0.15;
        const sueldoNetoAnual = sueldoAnual - impuesto;

        write("Su sueldo neto anual es:", sueldoNetoAnual.toFixed(2));
    } else {
        write("Su sueldo anual no supera los $30,000.");
    }
}

calcularSueldoNetoAnual();
