//17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
// Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
// Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
// Realice un algoritmo para determinar la ganancia obtenida.>
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: tipo de banano (A o B), tamaño del banano (1 o 2), precio por kilo de banano, total de kilos vendidos
// Proceso: calcular la ganancia considerando el tipo, tamaño y precio por kilo de banano
// Salida: ganancia obtenida por la venta de bananos
// Pseudocódigo:
// Algoritmo calcularGanancia
//    Leer tipoDeBanano
//    Leer tamañoDelBanano
//    Leer precioPorKilo
//    Leer totalKilosVendidos
//    Inicializar gananciaObtenida como 0
//    Si tipoDeBanano es 'A' y tamañoDelBanano es 1
//        Incrementar precioPorKilo en $2
//    Si tipoDeBanano es 'A' y tamañoDelBanano es 2
//        Incrementar precioPorKilo en $3
//    Si tipoDeBanano es 'B' y tamañoDelBanano es 1
//        Decrementar precioPorKilo en $3
//    Si tipoDeBanano es 'B' y tamañoDelBanano es 2
//        Decrementar precioPorKilo en $5
//    Calcular la ganancia multiplicando precioPorKilo por totalKilosVendidos
//    Escribir "La ganancia obtenida es:" seguido de gananciaObtenida
// Finalgoritmo
const read = require('prompt-sync')();
const write = console.log;

function calcularGanancia() {
let tipo = read("Ingrese el tipo de banano (A o B): ").toUpperCase(); gananciaob=0;
let tamaño = parseFloat(read("Ingrese el tamaño del banano (1 o 2): "));
let preciodelkilo=0; ttkilvendido=0;
preciodelkilo=parseFloat(read("ingrese el precio por kilo  de banano "))
ttkilvendido=parseFloat(read("ingrese el total de kilo  de banano vendido "))
    if (tipo === 'A' && tamaño === 1) {
        preciodelkilo += 2   ; // Se le cargan $2 al precio inicial para tipo A, tamaño 1
        gananciaob= preciodelkilo*ttkilvendido
    } else if (tipo === 'A' && tamaño === 2) {
        preciodelkilo += 3; // Se le cargan $3 al precio inicial para tipo A, tamaño 2
        gananciaob= preciodelkilo*ttkilvendido
    } else if (tipo === 'B' && tamaño === 1) {
    preciodelkilo -= 3; // Se le rebajan $3 al precio inicial para tipo B, tamaño 1
    gananciaob= preciodelkilo*ttkilvendido
        
    } else if (tipo === 'B' && tamaño === 2) {
        preciodelkilo -= 5; // Se le rebajan $5 al precio inicial para tipo B, tamaño 2
        gananciaob= preciodelkilo*ttkilvendido    }

    write("La ganancia obtenida es:", gananciaob);
}


// Llamar a la función para calcular la ganancia
calcularGanancia();
