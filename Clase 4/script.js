// Función que obtiene el nombre completo del estudiante.
const fullName = () => 
`${prompt('Introduzca su nombre: ')} ${prompt('Introduzca su apellido: ')}`;

// Esta función hace una sumatoria de todas las nota del estudiante.
const summatory = (grades, grade) => grades + grade;

// Retorna la sumatoria de las notas
// Toma cada una de las notas del estudiante, dependiendo de cuantas
// calificaciones se quiera tomar.
const inputGrade = (num) => {
    let counter = 0;
    let grade;
    let grades = 0;

    // Esta instrucción toma y va sumando cada una de las notas digitadas.
    while(num > counter){
        grade = parseInt(prompt(`Digite la nota de la asignatura #${++counter}:`));
        grades = summatory(grades, grade);
    }

    return grades;
};

// Esta es la función que calcula el promedio de las calificaciones.
const average = (grades, num) => Math.round(grades / num);

// Por último esta es la función principal del programa, es la encargada de
// llamar en el orden correcto a cada una de las funciones para que el código
// sea legible.
const studentGradesAvg = () => {
    const msg = `${fullName()} su promedio de calificación es:`;
    const num = parseInt(prompt(`Calcular promedio 
    Introduzca la cantidad de asignaturas:`));

    // Renderiza en el elemento studentList del DOM un elemento li
    // que contiene el nombre y promedio del estudiante. 
    document.getElementById('studentList')
        .appendChild(document.createElement('li'))
        .innerText = `${msg} ${average(inputGrade(num), num)}`;
};

// Ejecución del programa
const numStudents = parseInt(prompt('Ingrese la cantidad de estudiantes:'));
for(let i = 0; i < numStudents; i++){
    studentGradesAvg();
}