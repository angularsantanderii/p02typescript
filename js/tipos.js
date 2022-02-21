// Tipos en Typescript
// Sintaxis básica de declaración
// let identificador: tipo;
// Tipos primitivos
// string
var mensaje; // Estableciendo tipado fuerte a la variable como string
mensaje = 'Hola Mundo!';
// mensaje = 12; // Error
// number (ya existen los bigint)
var resultado;
resultado = 12.45;
// let logsCounter: bigint; // Disponible para ES2020 en adelante
// logsCounter = 79874676384638768436874368347n;
// boolean
var mayorEdad;
mayorEdad = false;
// null ó undefined
// poco utilizado
// Cuando declaramos e inicializamos se produce inferencia de tipos
// y podemos declarar o no el tipo
var puntuacion = 12; // No es necesario el tipo number porque lo obtiene por inferencia
// puntuacion = '12'; error
// any (romper la inferencia)
var id = 2876; // El tipo any permitirá cualquier tipo primitivo o compuesto
id = 'A1876861';
// Tipos complejos
// Arrays
// let identificador: tipo-elemento[] ó let identificador: Array<tipo-elemento>
var frutas; // Array de elementos de tipo string
var puntuaciones; // Array de elementos de tipo number
frutas = ['peras', 'manzanas', 'naranjas'];
// Tipado de funciones 
function suma(operando1, operando2) {
    return 'La suma es ' + operando1 + operando2;
}
suma(2, 3);
function setMensaje(mensaje) {
    console.log(mensaje);
}
// Parámetros opcionales
function multiplicacion(operando1, operando2, mensaje) {
    return mensaje ? mensaje + operando1 * operando2 : 'El resultado es ' + operando1 * operando2;
}
var resultado1 = multiplicacion(10, 5);
var resultado2 = multiplicacion(2, 4, 'Solución: ');
// Tipos genéricos (definen en tiempo de invocación)
function getResultado(valor) {
    return 'El resultado es ' + valor;
}
var resultado3 = getResultado('9.80'); // En la invocación definimos el tipo
var resultado4 = getResultado(9.9);
var referencia = 123;
referencia = '0000234';
var toby = 'Mastín';
