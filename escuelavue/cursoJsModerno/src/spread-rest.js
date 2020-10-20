const numeros = [1,2,3,4,5];
console.log(...numeros);

const oracion = "Hola mundo";
console.log(...oracion);

//Pasar matrices como argumentos
function sumar (a, b, c, d, e) {
    return a + b + c + d + e;
}

//console.log(sumar.apply(null, numeros))
console.log(sumar(...numeros));

// clonar matrices y objetos
const numerosCopia = [...numeros];
numeros.push(6);
console.log(numeros, numerosCopia);

const datos = {nombre: 'Juan', ciudad: 'Valencia'};
const datosCopia = {...datos}
console.log(datosCopia);

// Fusionar matrices y objetos
const preferencias = {nombre: 'Andres', creveza: 'Estrella', color:'rubia'};
const persona = {...datos, ...preferencias};
console.log(persona);

//REST
// Representa un número infinito de argumentos como matriz
function sumar2(...argumentos) {
    return argumentos;
}

const numeros2 = [21,22,66];
console.log(sumar2(...numeros, ...[55], ...numeros2, 4, 88, 99))