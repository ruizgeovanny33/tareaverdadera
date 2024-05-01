//1.	Pedir al usuario su nombre y saludarlo

// Analisis de requerimientos:
// Los datos o variables del problema
// Entrada: nombre=""(leer)
// Proceso: saludar al usuario usando el nombre ingresado
// Salida: mensaje de saludo personalizado
// Pseudocodigo:
// Algoritmo saludar
// Declarar nombre="", saludo=""
// Escribir "Ingrese su nombre"
// Leer nombre
// Saludo = "Hola, ¿cómo estás, " + nombre + "?"
// Escribir Saludo
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function saludar(){
    let name=" ";
    name= read("ingrese su nombre")

    write("hola como estas "+ name)
}
saludar();
