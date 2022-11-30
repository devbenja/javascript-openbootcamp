// Bucles For

for(let i = 0; i < 5; i++){
    console.log(i);
}


// Bucles Foreach

const carros = ["Nissan", "Chevrolet", "Toyota"];

carros.forEach(car => {
    console.log(car);
});

// For of 

for(let car of carros){
    console.log(car);
}

// For in

for(let car in carros){
    console.log(carros[car]);
}

// Bucles While

let min = 0;
let max = 10;

while(min < max){
    console.log(min);
    min++;
}

do{
    console.log("Do While");
}while(min < max)