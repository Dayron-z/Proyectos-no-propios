//Invertir cadena
const a = "Pedro"

console.log(a.split("").reverse().join(""));


//Cuantas veces se repite un caracter 

// let frase = "El sol brilla en el cielo azul, mientras las hojas danzan al viento. La naturaleza susurra secretos en cada rincón"


// let caracter = "a"
// contador = 0

// frase = frase.split("")

// frase.forEach(letra => {

//     if (letra === caracter) {
//         contador++;
//     }
// });

// console.log(`El caracter ${caracter}  se repite ${contador} veces`);


let frase = "El sol brilla en el cielo azul, mientras las hojas danzan al viento. La naturaleza susurra secretos en cada rincón"

contador = 0

for (caracter of frase) {
    if (caracter === "o") {
        contador++;
    }
}

console.log(contador);




