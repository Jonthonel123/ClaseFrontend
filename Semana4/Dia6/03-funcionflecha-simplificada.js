//funcion flecha simplificada

const sumar = (a, b) => console.log(a + b);
sumar(8, 5)

//regla numero dos-> si la funcion recibe un parametro
//se puede omitir los parantesis, ejmplo

const cuadrado = numero => console.log(numero * numero);
cuadrado(12)

//tercera regla: si la funcion solo tiene una linea de 
//ejecucion y a su vez retorna un valor-> se puede
//obviar la palabra reservada 'return' y en su lugar
// encerrar el retorno en un parantesis
const cubo = n => (n * n * n);
console.log(cubo(5))