// Condicionales en JavaScript

const edad = 1;

if(edad >= 18){
    console.log("Es mayor de edad");
}
else if(edad < 0){
    console.log("Ingrese un numero mayor que 0");
}
else{
    console.log("Es menor de edad");
}

// Switch

const nota = 1;

switch(nota){
    case 5:
        console.log("Nota Intermedia");
        break;
    case 2:
        console.log("Nota Baja");
        break;
    case 10: 
        console.log("Nota Alta");

    default:
        console.log("Error");
}