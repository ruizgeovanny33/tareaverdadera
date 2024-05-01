//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Solicitar al usuario la nota de un examen y determinar si ha aprobado o reprobado.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: nota del examen
// Proceso: verificar si la nota es mayor o igual a 60 para aprobar
// Salida: mensaje indicando si el usuario aprobó o reprobó
// Pseudocódigo:
// Algoritmo aprobarOReprobar
//    Leer notaDelExamen
//    Verificar si la nota es mayor o igual a 60
//    Si es verdadero, escribir "Usted aprobó el curso."
//    Si es falso, escribir "Usted reprobó el curso."
// Finalgoritmo

const read= require('prompt-sync')();
const write = console.log;

function aprobaroreprobar() {
    let nota = parseFloat(read("Ingrese su nota de examen  "));

    if (nota >=60 ) {
        write(" USted aprobo el curso.");
    } else {
        write(" usted reprobo el curso  ");
    }
}

aprobaroreprobar();
