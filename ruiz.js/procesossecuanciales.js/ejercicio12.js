//12.	Pedir 5 números y asignarlos en un arreglo
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: num = 0
// Proceso: solicitar al usuario cinco números y almacenarlos en un arreglo
// Salida: arreglo con los números ingresados por el usuario
// Pseudocódigo:
// Algoritmo arreglodenumeros
// Declarar num = 0, acu = []
// Para i desde 0 hasta 4
//     Escribir "Ingrese un número"
//     Leer num
//     Agregar num a acu
// Fin Para
// Escribir el contenido de acu
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function arreglodenumeros(){
    let num=0; acu=[]
    for(let i=0; i<5;i++){
        num=parseFloat(read(" ingrese un numero "))
        acu+= num + " , "
    }
    write("[ "+acu+ "]")

}
arreglodenumeros()

