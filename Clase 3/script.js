let num = 0;
let counter = 0;
let flag = true;

// Bucle para adivinar un número pre-establecido.
// Con un contador que te da el número de veces que tuviste que ingresar
// un número para coincidir con el oculto.

// Si el contador llega a 10 perdiste
while(flag && counter < 10){
    num = parseInt(prompt(`Digite un número a adivinar de 0-100: 
    Intentos: ${10 - counter}`));
    counter++;

    // Este condicional te indica si tu número es mayor o menor al 
    // número a encontrar, si aciertas te manda un mensaje de que Acertaste.
    if(num === 23) { 
        alert(`Acertaste al intento #${counter}!!`); 
        flag = false;
    }
    else if(num > 23) alert("Tu número es mayor...");
    else alert("Tu número es menor...");
}

if(flag) alert("Perdiste...");