// Estructuras de Datos

// Arrays

const array = [1, "hoal", 1, "Bienvenido"];

array[4] = "Benja";
array[0] = 2

console.log(array);

// Objetos

const movil = {
    marca: "BMW",
    Precio: 21200,
    nuevo: true,
    color: "white",
    pago: ["credito", "contado", "financiado"],
    
    //Podemos agregar las key con comillas
    "año": 2022,
    "seguro": "vigente"
}

// Modificar valor de una key

movil.Precio = 10000;

console.log(movil.Precio);

// Fechas 

const horaActual = new Date();
const fechaMilis = new Date(10);
const fechaCadena = new Date("november 28 2022");
const fechaValores = new Date(2022, 10, 28);

let dia = horaActual.getDate();
let mes = horaActual.getMonth() + 1;
let año = horaActual.getFullYear();

console.log(horaActual);
console.log(fechaMilis);
console.log(fechaCadena);
console.log(fechaValores);


