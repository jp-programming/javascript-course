// Mensaje de bienvenida en consola y en un alert
const nom = prompt('Ingrese su nombre:');

console.log(`Bienvenido ${nom}`);
alert(`Bienvenido ${nom}`);

// Suma entrada con un valor almacenado y lo muestra en consola y en un alert
const number = parseInt(prompt('Ingrese un número'));
const numStored = 5;

const result = numStored + number;
console.log(result);
alert(`${numStored} + ${number} = ${result}`);

// Toma dos valores, los concatena y los muestra en consola y en un alert
const msgOne = prompt('Ingrese algo:');
const msgTwo = prompt('Ingrese otra cosa:');

const concat = `${msgOne} ${msgTwo}`;
console.log(concat);
alert(`La concatenación de ${msgOne} y ${msgTwo} es: ${concat}`);


