function capitalizar (texto) {
    return texto.substring(0, 1).toUpperCase() + texto.substring(1, texto.length);
} 
console.log(capitalizar("hola mundo"));

export default capitalizar;