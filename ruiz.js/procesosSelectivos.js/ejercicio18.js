// 18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
// El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
// Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva

// Calcular el presupuesto total considerando el número de personas asistentes a un evento.
// Análisis de requerimientos:
// Los datos o variables del problema
// Entrada: número de personas asistentes
// Proceso: calcular el presupuesto total basado en el número de personas y tarifas por persona
// Salida: presupuesto total incluyendo el IVA
// Pseudocódigo:
// Algoritmo somosMas
//    Leer numeroDePersonas
//    Definir IVA como 0.15
//    Inicializar total y totalIVA como 0
//    Si numeroDePersonas es menor o igual a 100
//        Calcular total multiplicando numeroDePersonas por $20
//    Sino, si numeroDePersonas está entre 101 y 200
//        Calcular total multiplicando numeroDePersonas por $15
//    Sino
//        Calcular total multiplicando numeroDePersonas por $10
//    Calcular totalIVA sumando al total el producto de total por el IVA
//    Escribir "El presupuesto total es de " seguido de totalIVA
// Finalgoritmo
const read= require('prompt-sync')();
const write = console.log;
function somosmas(){
    let numberperson= parseFloat(read(" ingrese el total de personas "))
    let iva = 0.15; total=0;totaliva=0
    
    if(numberperson<=100){
        total= numberperson*20
        totaliva= total+(total*iva )
    }else if(numberperson>100 && numberperson<=200){
        total= numberperson*15
        totaliva= total+(total*iva )
    }else{
        total= numberperson*10
        totaliva= total+(total*iva )
    }
    write("el presupuesto total es de " + totaliva)
}
somosmas()
