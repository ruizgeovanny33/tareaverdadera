//3.	Pedir al usuario un número y mostrar si es par o impar.
const read= require('prompt-sync')();
const write = console.log;

function imparopar() {
    let num = parseFloat(read("Ingrese un numero "));
    
    if (num % 2==0) {
        write(" El numero es par .");
    } else {
        write(" El numero es impar ");
    }
}

imparopar();
