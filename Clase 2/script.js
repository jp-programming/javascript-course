const key = '7uDYHg5'; // key a introducir
const access = prompt(`Ingrese el siguiente código: ${key}`);

// Comprueba si el código introducido es exactamenta igual
// para dar el acceso y maneja el DOM
if(access === key) {
    alert('Tiene acceso al sitio');
    document.body.appendChild(document.createElement('p')).innerText = 'Bienvenido';
} else {
    alert('Código inválido');
    document.body.appendChild(document.createElement('p')).innerText = 'No entró al sitio';
}
